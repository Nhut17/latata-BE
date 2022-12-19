const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/addressDelivery')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address} = req.body
   const userId = req.user[0]._id
    const addressModel = await Address.findOne({userId: userId})

    console.log(addressModel)
    const adressDefault = {
        name,
        phone,
        address,
        address_default: 1,
    }

    const newAddress = {
        name,
        phone,
        address,
    }

      if(!addressModel)
        {
            const data = new Address.create({
                userId: userId,
                addresses: 
            })
        }
        else{
            addressModel.addresses.push({
                name,
                phone,
                address,
            })
            await addressModel.save()
        }


        res.status(201).json({      
            success: true,
            address: addressModel
        })
 
  
  })