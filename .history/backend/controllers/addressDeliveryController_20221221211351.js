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





// get address
exports.getAddress = catchAsyncError( async (req,res,next) => {

    // const id = req.params.id
    
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    if(!addressModel)
    {
        return next(new ErrorHandler('Address is empty'))
    }

    // const address = addressModel.addresses.filter(val => val._id == id)

    res.status(201).json({      
        success: true,
        address: addressModel.addresses
    })
  })


// update default address options
exports.updateDefault = catchAsyncError( async (req,res,next) => {

    const { } = req.body
    
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    if(!addressModel){
        return next(new ErrorHandler('Address not found', 404))
    }

    // remove default address
    const addressIndex = addressModel.addresses.findIndex(val => val.address_default == 1)
    addressModel.addresses[addressIndex].address_default = 0

    // update new default address
    const updateIndex = addressModel.addresses.findIndex(val => val._id == id)
    addressModel.addresses[updateIndex].address_default = 1

    await addressModel.save()

    res.status(201).json({      
        success: true,
        address: addressModel
    })
  })


// get address
exports.getOneAddress = catchAsyncError( async (req,res,next) => {

    const id = req.params.id
    
    const userId = req.user[0]._id
  
    const addressModel = await Address.findOne({userId: userId})

    if(!addressModel)
    {
        return next(new ErrorHandler('Address is empty'))
    }

    const address = addressModel.addresses.filter(val => val._id == id)

    res.status(201).json({      
        success: true,
        address: address
    })
  })