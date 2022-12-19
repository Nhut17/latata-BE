const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/addressDelivery')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address} = req.body
   const userId = req.user[0]._id
    const addressModel = await Address.findOne({userId: userId})

  try{

      if(addressModel.addresses.length === 0)
        {
            addressModel.addresses.push({
                address,
                name
            })
        }
}
catch(err){
    console.log(err);
}
   
    res.status(201).json({      
          success: true,
      })
  
  })