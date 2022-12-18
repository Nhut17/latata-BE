const Order = require('../models/order');
const Product = require('../models/products');
const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Cart = require('../models/cart');
const moment = require('moment-timezone');
const sendOrder = require('../utils/sendOrder')

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
    const user = await User.findById(order.user)        // 1
    
    if(order.status === 'DONE')     // 3                    
    {
        return next(new ErrorHandler('You have already delivered this order',400))  // 4
    }

    if(order.status === 'CANCELLED')    // 5
    {
        return next(new ErrorHandler('The order was cancelled',400))       // 6 
    }

    if(order.status === 'DELIVERING')   // 7
    {
        order.orderItems.forEach( async item => {               // 8
            await updateStock(item.productId,item.quantity)
        })

        const date = new Date()             // 9
        order.deliveredAt = moment.tz(date.getTime(),'Asia/Bangkok').format('HH:ma | d-MM-YYYY')            // 10

        try{                   // 11

            await sendOrder({          // 12  
                email: user.email,
                subject: 'XÁC NHẬN ĐƠN HÀNG',
                order: order,
                message: 'Đơn hàng đã đặt'
            })
        }
        catch(err){         // 13

            console.log(err);   // 14
        }

    }

    order.status = req.body.status,     // 15
    await order.save()          // 16
    res.status(200).json({      // 17
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