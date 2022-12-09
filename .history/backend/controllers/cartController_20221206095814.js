const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

  // user id add cart
    const userId = req.params.id

    const user = req.user.id
    console.log('user: ' + user)

    const {
        productId,
        quantity
    } = req.body

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    // cart is already
    const cartOld = await Cart.findOne({
        user: userId
    })


    let updateQuantity = quantity ;


    // update product quantity
    var productUpdate = []
    if(cartOld)
    {
        const indexId = cartOld.products.findIndex(val => val.productId == productId) 
        productUpdate  = cartOld.products
        

        if( indexId !== -1)
            {
                productUpdate[indexId].quantity += quantity
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

  

   
    if(cartOld)
    {
        const index = cartOld.products.findIndex(val => val.productId == productId) 

        if(index !== -1)
        {
            console.log('find index')
            const updateCart = {
                products: productUpdate,
                totalPrice: cartOld.totalPrice + (products.price * quantity),
                quantity: cartOld.quantity + quantity,
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
        }
        else 
        {
            const updateCart = {
                products: cartOld.products.concat(products),
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

    if(!getCart){
        return next(new ErrorHandler('Cart not found', 404))
    }

    res.status(201).json({
        success: true,
        getCart
    })
})



// Delete a cart
exports.deleteCart = catchAsyncError( async (req, res, next) => {

    const getCart = await Cart.findById(req.params.id)

    

    if(!getCart){
        return next(new ErrorHandler('Cart not found', 404))
    }

    await getCart.remove()

    res.status(201).json({
        success: true,
        message:'Cart is deleted',
    })
})



// Increase quantity item cart
exports.increaseQuantity = catchAsyncError( async (req, res, next) => {

    const getCart = await Cart.findById(req.params.id)
    const {quantity,productId} = req.body

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    if(!getCart){
        return next(new ErrorHandler('Cart not found', 404))
    }

    

    

    res.status(201).json({
        success: true,
        message:'Cart is deleted',
    })
})