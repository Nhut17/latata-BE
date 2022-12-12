const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        type: String,
    },
    otp: Number,
    resetToken: String,
    expireIn: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    
    
})

module.exports = mongoose.model('Otp',otpSchema)