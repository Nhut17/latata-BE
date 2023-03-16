const mongoose = require('mongoose')


const guestVoucherSchema = mongoose.Schema({
    phone: {
        type: Number,
        unique: true
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