const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/addressDelivery')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address} = req.body
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    console.log(addressModel)

    if(!addressModel){
        const data = new Address({
            userId: userId,
        })
        data.addresses.push({
            name,
            phone,
            address,
            address_default: 1,
        })
        await data.save()
        res.status(201).json({      
            success: true,
            address: data
        })
    }
    else{

        addressModel.addresses.push({
            name,
            phone,
            address,
        })
        await addressModel.save()
        res.status(201).json({      
            success: true,
            address: addressModel
        })
    }


  })



// get default  address
exports.getDefaultAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address} = req.body
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    if(addressModel.addresses.length === 0)
    {
        return next(new ErrorHandler('Address is empty'))
    }

    const defaultAddress = addressModel.addresses.filter(val => val.address_default == 1)


    res.status(201).json({      
        success: true,
        address: defaultAddress
    })
  })

// get   address
exports.getAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address,} = req.body
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    if(addressModel.addresses.length === 0)
    {
        return next(new ErrorHandler('Address is empty'))
    }

    const defaultAddress = addressModel.addresses.filter(val => val.address_default == 1)


    res.status(201).json({      
        success: true,
        address: defaultAddress
    })
  })