const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type
        }
    }

})

module.exports = mongoose.model('Order', orderSchema)