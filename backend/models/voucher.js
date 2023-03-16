const mongoose = require('mongoose')

const moment = require('moment-timezone');
const date = new Date()


const voucherSchema = mongoose.Schema({
    voucher: {
        type: String
    },
    sales: {
        type: Number
    },
    createAt: {
        type: Date,

    },
    expiredIn: {
        type: Date
    }
   
})

module.exports = mongoose.model('Voucher', voucherSchema )