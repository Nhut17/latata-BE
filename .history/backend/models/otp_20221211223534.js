const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        type: String,
    },
    otp: Number,
    
    
    
})

module.exports = mongoose.model('Otp',otpSchema)