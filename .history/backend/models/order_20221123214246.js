const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    {
    product:{
        type: ObjectId,
        ref: 'Product'
    },
    name: String,
    price: Number,
    quantity: Number
    },
    {
        timestamps: true
    }
)

const cartItem  = mongoose.model('CartItem',cartItemSchema)

const orderSchema = mongoose.Schema({
    orderItems: [cartItemSchema],
    address: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    paymentInfo: {
        type: String,
        default: 'COD',
        enum: [
          'COD',
          'PAYPAL'
        ],
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

const order = mongoose.model('Order',orderSchema)


module.exports = { order , cartItem}