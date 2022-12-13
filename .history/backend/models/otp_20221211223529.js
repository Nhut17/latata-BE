const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        type: String,
    },
    otp: 
    
    
})

module.exports = mongoose.model('Otp',otpSchema)