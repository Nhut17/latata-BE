const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')


// add to cart
exports.addAddress = catchAsyncError( async (req,res,next) => {

   
  
      res.status(201).json({      
          success: true,
      })
  
  })