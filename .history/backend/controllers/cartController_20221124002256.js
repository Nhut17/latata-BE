const Cart = require('../models/cart')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

    const {
        product,
        price,
        quantity
    } = req.body


    const cartOld = await Cart.findOne({
        product: product
        
    })

    
   
    if(cartOld)
    {
        if(product == cartOld.product) 
        {
            const updateCart = {
                product: cartOld.product,
                price: cartOld.price,
                quantity: cartOld.quantity + quantity
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,{
                new: true,
                runValidators: true,
                useFindAndModify: true
            })
        }
    }
    else{
   
         await Cart.create({
            product,
            price,
            quantity
        })
    }


    res.status(201).json({
        success: true
    })

})


// exports.getCart = catchAsyncError( async (req, res, next) => {



// })