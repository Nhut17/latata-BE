const User = require('../models/user')
const OTP = require('../models/otp')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')



// Register a user => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const {
        username,
        name,
        email,
        phone,
        password,
        avatar
    } = req.body;

    const checkAccount = await User.findOne({
        email: email
    })


    if(checkAccount){
        return next(new ErrorHandler('Email đã tồn tại', 404))
    }

    try{
       
       
        const user = await User.create({
            username,
            name,
            email,
            phone,
            password,
            avatar: {
                url: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
        })
    
       
        
        sendToken(user, 200, res);
    }
    catch(e){

    }
 

})


// Login User => /a[i/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }


    // Finding user in database
    const user = await User.findOne({
        email
    }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Password', 401));
    }


    
    sendToken(user, 200, res);

})


// Forgot Pasword => /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return next(new ErrorHandler('User not found with this mail', 404))
    }

     // Get reset token
     const resetToken = user.getResetPasswordToken();

    // generate otp
    const otp = Math.floor((Math.random() * 100000) + 1)
    const optData = await OTP.create({
        email: req.body.email,
        otp: otp,
        resetToken: resetToken,
        expireIn: new Date().getTime() + 60*1000
    })

    await user.save({
        validateBeforeSave: false
    })

    // create reset password url
    // const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    // const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, the ignore it`

    try {
        await sendEmail({
            email: user.email,
            subject: 'RESET PASSWORD',
            message: otp
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({
            validateBeforeSave: false
        });

        return next(new ErrorHandler(error.message, 500))
    }
})

exports.verifyOtp = catchAsyncError(async (req, res, next) => {

    const { otp } = req.body

    const Otp = await OTP.findOne({
        otp: otp
    })

    if(Otp){
        const currentTime = new Date().getTime()
        const diff = Otp.expireIn - currentTime.getTime()
        if(diff < 0){
            res.status(200).json({
                message: 'OTP expired'
            })
        }
        else{
            res.status(200).json({
                message: 
            })
        }
    }

    console.log(Otp)

})

// Reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {

   

    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    console.log(resetPasswordToken);

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now()
        }
    })


    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    // setup new password
    user.password = req.body.password

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)

})

// Get currently logged in usr details => /api/v1/me
exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user[0]._id);

    res.status(200).json({
        success: true,
        user
    })
})


// Update / Change Password => api/v1/password/update
exports.updatePassword = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id).select('+password');

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Old password is incorrect'))
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)


})


// Update user profile => api/v1/profile/update
exports.updateProfile = catchAsyncError(async (req, res, next) => {

    const newUserData = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email
    }

    // Update avatar: TODO

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({
        success: true
    })

})

// Logout user => /api/v1/logout
exports.logout = catchAsyncError(async (req, res, next) => {

   res.clearCookie("refresh_token")

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})


// Admin Routes


// Get all users => api/v1/admin/users
exports.allUsers = catchAsyncError(async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})


//Get user details => api/v1/admin/user/:id
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User does not found with id: ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    })
})


// update user profile => api/v1/admin/user/:id
exports.updateUser = catchAsyncError(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }


    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({
        success: true
    })

})


// Delete user => api/v1/admin/user/:id
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User does not found with id: ${req.params.id}`));
    }

    // Remove avatar from cloudinary - TODO
    await user.remove();

    res.status(200).json({
        success: true,
        user
    })
})


// refresh token
exports.refreshToken = catchAsyncError(async (req, res, next) => {
   
    const refreshToken = req.cookies.refresh_token;



    if(!refreshToken){
        return res.status(401).json("You're not Authenticated")
    }


    jwt.verify(refreshToken,process.env.JWT_REFRESH,(err,user) => {
        if(err){
              return res.status(403).json({ message: 'Unauthorized' });
        }

        const newAccessToken = jwt.sign({
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_TIME
        }
        )

        const newRefreshToken = jwt.sign({
            email: user.email,
            username: user.username
        },
        process.env.JWT_REFRESH,
        {
            expiresIn: "365d"
        }
        )

        res.cookie('refresh_token', newRefreshToken,{
            httpOnly: true,
            secure: false,
            path:'/',
            sameSite: "strict",
        });


        res.status(200).json({
            accessToken: newAccessToken,
        })
    
    })

    res.status(200).json({
        success: true,
        refreshToken
    })
})