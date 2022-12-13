const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        
    }
    
    
})

module.exports = mongoose.model('Otp',otpSchema)