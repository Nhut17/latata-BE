const mongoose = require('mongoose')


const voucherSchema = mongoose.Schema({
    voucher: {
        type: String
    },
    sales: {
        type: Number,
        
    },
    quantity: {
        type: Number,
    },
    createAt: {
        type: Date,

    },
    expiredIn: {
        type: Date
    }
   
})

module.exports = mongoose.model('Voucher', voucherSchema )