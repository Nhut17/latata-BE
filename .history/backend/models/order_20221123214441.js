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
    payment: {
        type: String,
        default: 'COD',
        enum: [
          'COD',
          'PAYPAL'
        ],
    },
    amount: { type: Number  },
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
    status: {
        type: String,
        default: 'PROCESSING',
        enum: [
          'PROCESSING',
          'DELIVERING',
          'DONE',
          'CANCEL',
        ],
      },
    deliveredAt:{
        type: Date
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }


})

const order = mongoose.model('Order',orderSchema)


module.exports = { order , cartItem}