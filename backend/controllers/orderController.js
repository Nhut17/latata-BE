const Order = require('../models/order');
const Product = require('../models/products');
const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Cart = require('../models/cart');
const moment = require('moment-timezone');
const sendOrder = require('../utils/sendOrder')

const Sale_Figure = require('../models/saleFigures')
const SalesCate = require('../models/salesCategory')
const SumSalesFigure = require('../models/sumSalesFigure')
/// Create a new order => api/v1/order/new

exports.newOrder = catchAsyncErrors( async(req, res, next) => {

    const userId = req.user[0]._id

    const cart = await Cart.findOne({userId: userId})

    const orderItems = cart.products
    const totalPrice = req.body.totalPrice

    const {
        name,
        address,
        phoneNo,
        note,
        status,
        payment,
    } = req.body;


    const quantity = orderItems.reduce((acc,val) => { return acc + val.quantity },0)

    const shippingFee = totalPrice >= 5000000 ? 0 : 30000

    const order = await Order.create({
        orderItems,
        name,
        address,
        phoneNo,
        note,
        quantity,
        shippingFee,
        totalPrice,
        status,
        payment, 
        user: userId
    })



    await cart.remove()

    res.status(201).json({
        success: true,
        order
    })

})


// get single order => api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors( async (req, res, next) => {

    const order = await Order.findById(req.params.id)


    if (!order)
    {
        return next( new ErrorHandler('No order found with this ID',404))
    }

    res.status(200).json({
        success:true,
        order
    })
})

// get logged in user order => api/v1/orders/me
exports.myOrders = catchAsyncErrors( async (req, res, next) => {
    const orders = await Order.find({ user: req.user[0]._id})

    res.status(200).json({
        success:true,
        orders
    })
})

// get all orders - ADMIN  => api/v1/admin/orders
exports.allOrders = catchAsyncErrors( async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;
    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success:true,
        totalAmount,
        orders
    })
})


// cancel orders - ADMIN  => api/v1/admin/order/cancel/:id
exports.cancelOrder = catchAsyncErrors( async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if(order.status === 'PENDING')
    {
       order.status =  'CANCELLED'
    }
    else{
        return next(new ErrorHandler('You cannot cancel this order',400))
    }

    await order.save()

    res.status(200).json({
        success:true
    })
})


// Update / Process orders - ADMIN  => api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors( async (req, res, next) => {
    const order = await Order.findById(req.params.id)   
    const user = await User.findById(order.user)       
    
    if(order.status === 'DONE')                       
    {
        return next(new ErrorHandler('You have already delivered this order',400))  
    }

    if(order.status === 'CANCELLED')    
    {
        return next(new ErrorHandler('The order was cancelled',400))      
    }
   

    if(req.body.status === 'DELIVERING')   
    {

        const date = new Date().getTime()  
        
        const order_times = new Date(date)

        order.deliveredAt = order_times.toLocaleTimeString() + ' - ' + order_times.toLocaleDateString()

        // order.deliveredAt = moment.tz(date.getTime(),'Asia/Bangkok').format(`HH:ma | ${date.getDate()}-MM-YYYY`)

        
      


        // send email confirm order
        try{                   

            await sendOrder({          
                email: user.email,
                subject: 'Xác nhận đơn hàng',
                order: order,
                message: 'Đơn hàng đang được giao',
                deliverAt: order.deliveredAt
            })
        }
        catch(err){         
            console.log(err);   
        }

    }

    if(req.body.status === 'DONE'){



        order.orderItems.forEach( async item => {               
            await updateStock(item.productId,item.quantity)
            await createSalesCategory(item)
        })

        // create a sales figures
        await createSaleFigures(order)

        // create a sum sales figure
        await createSummarySalesFigure(order.totalPrice,order.quantity)


        // update wallet of user
       user.wallet += order.totalPrice
       user.save()

        try{                   

            await sendOrder({          
                email: user.email,
                subject: 'Đơn hàng đã giao thành công',
                order: order,
                message: 'CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG',
                deliverAt: order.deliveredAt
            })
        }
        catch(err){         
            console.log(err);   
        }
        
    }
    order.status = req.body.status,     
    await order.save()                  
    res.status(200).json({              // 13
        success:true,
        order
    })

})


// Delete order => api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors( async (req, res, next) => {
    const order = await Order.findById(req.params.id)


    if (!order)
    {
        return next( new ErrorHandler('No order found with this ID',404))
    }

    await order.remove()

    res.status(200).json({
        success:true
    })
})


// create summary sales figure
 async function createSummarySalesFigure(sales,quantity_product)
{

    const date_time = new Date()

    const year = date_time.getFullYear()
    const month = date_time.getMonth() + 1

    const check_sum  = await SumSalesFigure.findOne({
        year:year
    })


    // if sum sales is not exist
    if(!check_sum)
    {
        const new_list_month = [
            {
                month,
                sales,
                quantity_product
            }
        ]

        await SumSalesFigure.create({
            year,
            months: new_list_month
        })
        return
    }

    // if sum sales is exist and month hasn't exist
    const months = check_sum.months
    const indx = months.findIndex(el => el.month == month)

    const list_month_sale = {
        month,
        sales,
        quantity_product
    }

    
    // index <=  -1
    if(indx <= -1)
    {
         months.push(list_month_sale)

         // update months
         await SumSalesFigure.findByIdAndUpdate(check_sum._id,{
            months: months
         })
    }
    else{
        months[indx].sales += sales
        months[indx].quantity_product += quantity_product

        // update sales
        await SumSalesFigure.findByIdAndUpdate(check_sum._id,{
            months: months  })
    }

}


//  update Stock
async function updateStock(id,quantity) {
    const product = await Product.findById(id);

    if(product.stock < 0)
    {
        return next(new ErrorHandler('Product is out of stock',400))
    }
    product.stock = product.stock - quantity ;

    product.sold += quantity

    await product.save({validateBeforeSave: false})
}


// sales figures
async function createSaleFigures (order)
{
    const date_time = new Date().getTime()
    const time = new Date(date_time)

    const check_sale_figure = await Sale_Figure.findOne({
            order_date: time.toLocaleDateString()
    })


    // check existing sale figure follow day
    if(!check_sale_figure)
    {
        try{

                await Sale_Figure.create({
                    order_date: time.toLocaleDateString(),
                    sales: order.totalPrice,
                    quantity: order.quantity, 
                })
        }
        catch(e)
        {
            console.log(e)
        }
    }
    else{
       
        // update sale figure follow order
        check_sale_figure.sales += order.totalPrice
        check_sale_figure.quantity += order.quantity
        check_sale_figure.total_order += 1

        await check_sale_figure.save()

    }
}


// sales categories
async function createSalesCategory (orderItem) {

    const current_time = new Date()
    const month = current_time.getMonth() + 1
    const year = current_time.getFullYear()



    const product = await Product.findById(orderItem.productId)


    const cate = product.category
    const quantity = orderItem.quantity
    const sales_cate = orderItem.priceDeal


    const check_sale_cate = await SalesCate.findOne({
        month: month,
        year: year
    })

    
    // sale cate hasn't 
    if(!check_sale_cate)
    {
        const list_sale_cate = [
            {
                cate,
                sales_cate,
                quantity
            }
        ]


        await SalesCate.create({
            categories: list_sale_cate,
            year,
            month
        })
    
    } 
    else{

    // if sale cate have
   const cates = check_sale_cate.categories
   const indx = cates?.findIndex(el => el.cate.toLowerCase() == cate.toLowerCase())


    if(indx >= 0)
    {
        // update sales and quantities
        cates[indx].quantity += quantity
        cates[indx].sales_cate += sales_cate
    }
    else {
        // create new category
        const new_cate = {
            cate,
            sales_cate,
            quantity
        }
        cates.push(new_cate)
    }
        await SalesCate.findByIdAndUpdate(check_sale_cate._id,{
           categories: cates
        },{
            new: true,
            runValidators: true,
            useFindAndModify: true
        })


    }
}


