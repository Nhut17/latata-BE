const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

  // user id add cart

    const  userId  = req.user[0]._id
    console.log(userId)

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

    const  userId  = req.user[0]._id

    const getCart = await Cart.findOne({
        user: userId
    })


    if(!getCart){
        return next(new ErrorHandler('Cart not found', 404))
    }

    res.status(201).json({
        success: true,
        cart: getCart
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
exports.decreaseQuantity = catchAsyncError( async (req, res, next) => { 
    
    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    // get user current
    const  userId  = req.user[0]._id

     // cart is already
     const cartOld = await Cart.findOne({
        user: userId
    })

    if(!cartOld){
        return next(new ErrorHandler('Cart not found', 404))
    }

    const productId = req.params.id
    const listItem = cartOld.products
    console.log('listItem: '  + listItem)

     // update product quantity
    const findProduct = listItem.findIndex(val => val)

    res.status(201).json({
        success: true,
        message:'Cart is deleted',
    })
})