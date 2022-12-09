const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema


const orderSchema = mongoose.Schema({
    orderItems: [{
        productId: {
            type: Object
        }
    }],
    name: String,
    address: String,
    phoneNo: Number,
    quantity: { type: Number  },
    shippingFee: {
        type: Number,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        default: 0.0
    },
    status: {
        type: String,
        default: 'PENDING',
        enum: [
          'PENDING',
          'DELIVERING',
          'DONE',
          'CANCEL',
        ],
      },
    payment: {
        type: String,
        default: 'COD',
        enum: [
          'COD',
          'PAYPAL'
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
        ref: 'User'
    },
    
})

module.exports = mongoose.model('Order',orderSchema)


