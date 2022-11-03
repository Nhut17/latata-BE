const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')

const crypto = require('crypto')

// Register a user => /api/v1/register
exports.registerUser = catchAsyncError( async (req,res, next) => {

    const {name,email,phone,password} = req.body;

    const user = await User.create({
        name,
        email,
        phone,
        password,
        avatar:{
            public_id: 'jujutsu-kaisen-0-1024x592',
            url:'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/jujutsu-kaisen-0-1024x592.jpg'
        }
    })

    // const token = user.getJwtToken()

    // res.status(201).json({
    //     success: true,
    //     token
    // })
    sendToken(user,200,res);

})


// Login User => /a[i/v1/login
exports.loginUser = catchAsyncError( async(req,res,next) => {
    const {email,password } = req.body;

    // Checks if email and password is entered by user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email & password',400))
    }


    // Finding user in database
    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return next(new ErrorHandler('Invalid Email or Password',401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid Email or Password',401));
    }

    // const token = user.getJwtToken()

    // res.status(201).json({
    //     success: true,
    //     token
    // })
    sendToken(user,200,res);

})


// Forgot Pasword => /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req,res,next) => {
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next( new ErrorHandler('User not found with this mail',404))
    }
    

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false})

    // create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;


    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, the ignore it`

     try{

        await sendEmail({
            email: user.email,
            subject: 'Latata Password Recovery',
            message
        })

        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email}`
        })

     } catch (error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false});

        return next(new ErrorHandler(error.message,500))
     }
})

// Reset password
exports.forgotPassword = catchAsyncError(async ( req, res, next) => {

    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })


    if(!user) {
        return next(new ErrorHandler('Password reset token is invalid or '))
    }

})

// Logout user => /api/v1/logout
exports.logout = catchAsyncError( async (req, res,next) => {
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})