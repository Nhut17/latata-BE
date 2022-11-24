const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

    const {
        productId,
        quantity
    } = req.body

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    const { name, images , price} = await Product.findById(productId)

    const userId = req.user._id

 

    const products = {
        name: name,
        images: images,
        price: price,
        quantity: quantity

    }

    const cartOld = await Cart.findOne({
        user: userId
    })




   
    if(cartOld )
    {
        if(cartOld.productId == productId)
        {
            const updateCart = {
                productId: cartOld.productId,
                products,
                totalPrice: cartOld.totalPrice + (quantity*products.price),
                totalQuantity: cartOld.quantity + quantity,
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
        else if(cartOld.productId !== productId)
        {
            const updateCart = {
                productId: cartOld.productId,
                products: cartOld.products.push(products),
                totalPrice: cartOld.products.reduce((acc,val) => {
                        return acc + val.price * quantity
                },0),
                totalQuantity: cartOld.quantity + quantity,
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
            
            
    }
    else{
   
         await Cart.create({
            productId,
            products,
            totalPrice: quantity * products.price,
            totalQuantity,
            user: userId
        })
    }


    res.status(201).json({
        success: true
    })

})



// get all cart user 
exports.getCart = catchAsyncError( async (req, res, next) => {

    const getCart = await Cart.find({
        user: req.params.id
    })

    console.log(getCart)

    res.status(201).json({
        success: true,
        getCart
    })
})