const Order = require('../models/order');
const Product = require('../models/products');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Cart = require('../models/cart');
const moment = require('moment-timezone');


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
    const orders = await Order.find({ user: req.user.id})

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
    console.log('ORDER: ' + order)
    if(order.status === 'DONE')
    {
        return next(new ErrorHandler('You have already delivered this order',400))
    }

    if(order.status === 'CANCELLED'){
        return next(new ErrorHandler('The order was cancelled',400))
    }

    if(order.status === 'DELIVERING'){
        order.orderItems.forEach( async item => {
            await updateStock(item.productId,item.quantity)
        })

        const date = new Date()
        // const uct_offset = date.getTimezoneOffset();
        // date.setMinutes(date.getMinutes() + uct_offset);

        // const vietnam_offset = 7*60
        // date.setMinutes(date.getMinutes() + vietnam_offset)

        // console.log(o)
     
        order.deliveredAt = moment.tz(date.now(),'Asia/Bangkok').format('HH:mA d-MM-YYYY')
    }
   

    order.status = req.body.status,
    
    await order.save()

    res.status(200).json({
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