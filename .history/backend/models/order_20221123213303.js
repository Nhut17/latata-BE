const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: 'Product'
    },
    name: String
    totalPrice: Number,
    quantity: number
})


const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type: String,
            required: true
        },
        phoneNo:{
            type: String,
            required: true
        },
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [{
        name:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
    }],
    paymentInfo: {
        id: {
            type: String
        },
        status: {
            type: String
        }
    },
    paidAt: {
        type: Date
    },
    shippingPrice: {
        type: Number,
        required:true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required:true,
        default: 0.0
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt:{
        type: Date
    },
    createAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Order', orderSchema)