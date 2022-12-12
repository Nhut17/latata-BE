const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        type: String,
    },
    
    
    
})

module.exports = mongoose.model('Otp',otpSchema)