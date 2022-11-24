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

    const addCart = req.body

    const cartId = await Cart.findById(product)

    if(product == cartId)
    {
       
        await Cart.findByIdAndUpdate(product,{
            ...addCart,
            quantity: ca.quantity + quantity
        })
    }

    const cart = await Cart.create({
        product,
        price,
        quantity
    })

    // const product = 


    res.status(201).json({
        success: true,
        cart
    })

})


// exports.getCart = catchAsyncError( async (req, res, next) => {



// })