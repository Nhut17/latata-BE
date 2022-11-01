const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type: String,
            re
        }
    }

})

module.exports = mongoose.model('Order', orderSchema)