const User = require('../models/user');

const jwt = require('jsonwebtoken')


const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('./catchAsyncErrors')

// Check if user is authenticated or not 
exports.isAuthenticatedUser = catchAsyncError( async ( req, res, next) => {



    const token = req.headers.authorization
    if(!token){
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        })
    }

    const user = jwt.verify(token,process.env.JWT_EXPIRES_TIME)
  

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