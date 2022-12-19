const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

   
  
    res.status(201).json({      
          success: true,
      })
  
  })