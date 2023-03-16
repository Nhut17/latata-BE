const mongoose = require('mongoose')
const validator = require('validator');

const guestVoucherSchema = mongoose.Schema({
    phone: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    listVoucher: [
        {
            type:String
        }
    ]
})

module.exports = mongoose.model('Guest Voucher', guestVoucherSchema)