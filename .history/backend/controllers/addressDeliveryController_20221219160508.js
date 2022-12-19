const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

   
  
      res.status(201).json({      // 17
          success: true,
      })
  
  })