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


    const accessToken = token.split(" ")[1]
    
    const decoded = jwt.verify(accessToken,process.env.JWT_SECRET)
    


    req.user = await User.find({email: decoded.email})  
  

    next()

})





// Handling users roles
exports.authorizeRoles = (...roles) => {

    console.log(role)
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