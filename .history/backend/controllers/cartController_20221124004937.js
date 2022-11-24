const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

    const {
        productId,
        totalPrice,
        quantity
    } = req.body

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    const { name, images , price} = await Product.findById(productId)

    const products = {
        name: name,
        images: images,
        price: price

    }

    const cartOld = await Cart.findOne({
        productId: productId
    })


   
    if(cartOld)
    {
        if(productId == cartOld.productId) 
        {
            const updateCart = {
                productId: cartOld.productId,
                products,
                totalPrice: cartO,
                quantity: cartOld.quantity + quantity,
                user: req.user._id
            }


            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
    }
    else{
   
         await Cart.create({
            productId,
            products,
            totalPrice: quantity * products.price,
            quantity,
            user: req.user._id
        })
    }


    res.status(201).json({
        success: true
    })

})


// exports.getCart = catchAsyncError( async (req, res, next) => {



// })