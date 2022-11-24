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

    console.log(product)

    const cartOld = await Cart.findOne({
        product: product
        
    })

    console.log(cartOld)

    if(product == cartOld.product) 
    {
       
        await Cart.findByIdAndUpdate(product,{
            ...addCart,
            quantity: cartId.quantity + quantity
        })
    } else{
   
        const cart = await Cart.create({
            product,
            price,
            quantity
        })
    }

    // const product = 


    res.status(201).json({
        success: true,
        cart
    })

})


// exports.getCart = catchAsyncError( async (req, res, next) => {



// })