const mongoose = require('mongoose');
const moment = require('moment-timezone');

const { ObjectId } = mongoose.Schema
const date = new Date().getTime()

const time = new Date(date)

const timer = time.toLocaleTimeString() + '  ' + time.toLocaleDateString()

// const timer = moment.tz(date.getTime(),'Asia/Bangkok').format(`HH:ma | ${date.getDate()}-MM-YYYY`)


const orderSchema = mongoose.Schema({
    
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
        priceDeal :{
            type : Number
        },
        images:[
            {
                url: {
                    type: String,
                    required: true
                },
            }
        ],
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
        default: timer
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

module.exports = mongoose.model('Order',orderSchema)


