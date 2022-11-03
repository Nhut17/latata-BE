const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
    }

})

module.exports = mongoose.model('Order', orderSchema)