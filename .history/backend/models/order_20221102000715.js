const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type: String
        }
    }

})

module.exports = mongoose.model('Order', orderSchema)