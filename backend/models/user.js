const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [20,'Your username cannot exceed 20 characters']
    },
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30,'Your name cannot exceed 30 characters']
    },
    email:{
        type: String,
        required: [true, 'Please enter your email '],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'Please enter your phone ']
    },
    birthday: {
        type: Date
    },
    password:{
        type: String,
        required: [true, 'Please enter your password '],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        url_id: String,
        url: {
            type: String,
            required: true
        },
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    wallet: {
        type: Number,
        default: 0
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

// Encrypting password before saving user
userSchema.pre('save', async function(next){

    if(!this.isModified('password'))
    {
        next()
    }

    this.password = await bcrypt.hash(this.password,10)


})  


// compare user password 
userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


// Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}


// Generate password reset token
userSchema.methods.getResetPasswordToken = function() {
    // Generate token 
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Has and set to resetPasswordToken 
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken
}

module.exports = mongoose.model('User',userSchema)

