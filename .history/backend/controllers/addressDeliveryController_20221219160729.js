const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/addressDelivery')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

   const userId = req.user[0]._id
    const address = await Address.findOne({userId: userId})

    if(address.addresses.length === 0)
   
    res.status(201).json({      
          success: true,
      })
  
  })