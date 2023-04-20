const mongoose = require('mongoose')


const voucherSchema = mongoose.Schema({
    voucher: {
        type: String
    },
    sales: {
        type: Number,
        
    },
    createAt: {
        type: Date,

    },
    list_used:[
        {
        type: String,
        }
    ],
    expiredIn: {
        type: Date
    }
})

module.exports = mongoose.model('Voucher', voucherSchema )