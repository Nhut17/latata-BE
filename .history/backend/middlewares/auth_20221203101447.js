const User = require('../models/user');

const jwt = require('jsonwebtoken')


const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('./catchAsyncErrors')

// Check if user is authenticated or not 
exports.isAuthenticatedUser = catchAsyncError( async ( req, res, next) => {

    // const { token } = req.cookies

    // console.log('token in Auth ', token)

    // if(!token){
    //     return next(new ErrorHandler('Login first to access this resource',401))
    // }


    // const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // req.user = await User.findById(decoded.id);

    // next()

    const token = req.headers.authorization

    if(!token){
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        })
    }

    
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
      
    console.log(decoded.email)
    req.user = await User.find({email: decoded.email})  
  

    next()

})





// Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role))
        {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`,403)
                )
        }
        next()
    }
}