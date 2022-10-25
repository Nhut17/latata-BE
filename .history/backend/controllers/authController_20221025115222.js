const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')

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

    await user.save({})
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