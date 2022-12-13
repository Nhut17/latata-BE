const mongoose = require('mongoose');



const otpSchema = mongoose.Schema({
    
    email: {
        type: 'string',
    }
    
    
})

module.exports = mongoose.model('Otp',otpSchema)