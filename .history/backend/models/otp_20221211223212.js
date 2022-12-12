const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    orderItems: [{
        productId: {
            type: ObjectId
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        image: {
            type: String
        },
        quantity: {
            type: Number
        },  
        
    }],
    name: String,
    address: String,
    phoneNo: {
        type: String,
    },
    note: {
        type: String
    },
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
          'CANCELLED',
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
        type: String
    },
    createAt: {
        type: String,
        default: moment.tz(Date.now(),'Asia/Bangkok').format('HH:mA d-MM-YYYY')
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

module.exports = mongoose.model('Otp',orderSchema)