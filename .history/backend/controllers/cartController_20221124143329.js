const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

    const productId = req.params.id

    const {
        quantity
    } = req.body

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    // user id add cart
    const userId = req.user._id

    // cart is already
    const cartOld = await Cart.findOne({
        user: userId
    })

    let updateQuantity = quantity ;

    if(cartOld)
    {
        const indexId = cartOld.products.findIndex(val => val.productId == productId) 

        if( indexId !== -1)
            {
                updateQuantity = cartOld.products[indexId].quantity + quantity
            }
       
    }

    // find product by id
    const { name, images , price } = await Product.findById(productId)

    const products = {
        name: name,
        images: images,
        price: price,
        quantity: updateQuantity,
        productId: productId
    }

  
    console.log(products)
    const temp = cartOld.products
    console.log(temp)

    



   
    if(cartOld)
    {
        const index = cartOld.products.findIndex(val => val.productId == productId) 

        if(index !== -1)
        {
            console.log('find index')
            const updateCart = {
                products,
                totalPrice: cartOld.totalPrice + (products.price * quantity),
                quantity: cartOld.quantity + quantity,
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
        else 
        {
            console.log('not find index')
            const updateCart = {
                products: cartOld.products.push(products),
                totalPrice: cartOld.totalPrice + (products.price * quantity),
                quantity: cartOld.quantity + quantity,
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
            
            
    }
    else{
       
         await Cart.create({
            products,
            totalPrice: quantity * products.price,
            quantity: quantity,
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