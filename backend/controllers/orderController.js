const Order = require('../models/order');
const Product = require('../models/products');
const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Cart = require('../models/cart');
const moment = require('moment-timezone');
const sendOrder = require('../utils/sendOrder')

const Sale_Figure = require('../models/saleFigures')

/// Create a new order => api/v1/order/new

exports.newOrder = catchAsyncErrors( async(req, res, next) => {

    const userId = req.user[0]._id

    const cart = await Cart.findOne({userId: userId})

    const orderItems = cart.products
    const totalPrice = cart.totalPrice

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
        })

        const date_time = new Date().getTime()
        const time = new Date(date_time)

        const check_sale_figure = await Sale_Figure.findOne({
                order_date: time.toLocaleDateString()
        })

        // check existing sale figure follow day
        if(!check_sale_figure)
        {
            try{

                    await check_sale_figure.create({
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

async function updateStock(id,quantity) {
    const product = await Product.findById(id);

    if(product.stock <= 0)
    {
        return next(new ErrorHandler('Product is out of stock',400))
    }
    product.stock = product.stock - quantity ;

    console.log('stock: ' + product.stock)
    product.sold += quantity
    console.log('sold: ' + product.sold)

    await product.save({validateBeforeSave: false})
}


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