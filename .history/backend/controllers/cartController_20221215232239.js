const Cart = require('../models/cart')
const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')



// add to cart
exports.addToCart = catchAsyncError( async (req,res,next) => {

  // user id add cart

    const  userId  = req.user[0]._id
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

    // find product
    const product = await Product.findById(productId)
    const initialStock = product.stock

    let updateQuantity = quantity ;


    // update product quantity
    var productUpdate = []
    if(cartOld)
    {
        const indexId = cartOld.products.findIndex(val => val.productId == productId) 
        productUpdate  = cartOld.products
        

        if( indexId !== -1)
            {
                if(initialStock - (productUpdate[indexId].quantity + quantity) < 0)
                {
                    return next(new ErrorHandler('Product is stock', 404))
                }

                productUpdate[indexId].quantity += quantity
                product.stock -= quantity
            }
       
    }


    const products = {
        name: product.name,
        images: product.images,
        price: product.price,
        promotion: product.promotion,
        priceDeal: product.priceDeal,
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
                totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
            await Product.findByIdAndUpdate(productId,product,config)
        }
        else 
        {


            const updateCart = {
                products: cartOld.products.concat(products),
                totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                user: userId
            }

  
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)
            await Product.findByIdAndUpdate(productId,product,config)
   

        }
            
            
    }
    else{
         await Cart.create({
            products,
            totalPrice: products.priceDeal * products.quantity,
            user: userId
        })
        try{    
            console.log(product.stock)
            product.stock
            await Product.findByIdAndUpdate(productId,product,config)
        }
        catch(err){
            console.log(err)
        }
    }

   

    res.status(201).json({
        success: true,
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

// Delete item in cart
exports.deleteItemCart = catchAsyncError( async (req, res, next) => {

    const getCart = await Cart.findOne({
        user: req.user[0]._id
    })

    const productId = req.params.id
    const product = await Product.findById(productId)

    const config = {
        new: true,
        runValidators: true,
        useFindAndModify: true
    }
    
    const listItem = getCart.products
    const findItemCart = listItem.findIndex( item => item.productId == req.params.id)

    if(!getCart){
        return next(new ErrorHandler('Cart not found', 404))
    }

    if(findItemCart === -1){
        return next(new ErrorHandler('Item cart not found', 404))
    }

    await listItem[findItemCart].remove()
    product.stock += listItem[findItemCart].quantity

    getCart.totalPrice = listItem.reduce((acc,val) => {
        return acc + (val.priceDeal * val.quantity)
    },0)
 
    await Cart.findByIdAndUpdate(getCart._id,getCart,config)
    await Product.findByIdAndUpdate(productId,product,config)

    res.status(201).json({
        success: true,
        message:'Cart is deleted',
    })
})

// Decrease quantity item cart
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

    const product = await Product.findById(productId)

     // update product quantity
    const findProduct = listItem.findIndex(val => val.productId == productId)

    if(!listItem[findProduct]){
        return next(new ErrorHandler('Cart not found', 404))
    }

    
    listItem[findProduct].quantity -= 1
    productId.stock += 1

   

    if(listItem[findProduct].quantity === 0){
        await listItem[findProduct].remove()
    }

    cartOld.totalPrice = listItem.reduce((acc,val) => {
        return acc + (val.priceDeal * val.quantity)
    },0)


    
    // console.log(updateItem)

    await Cart.findByIdAndUpdate(cartOld._id,cartOld,config)
    await Product.findByIdAndUpdate(productId,product,config)

    res.status(201).json({
        success: true,
     
    })
})

// Increase quantity item cart
exports.increaseQuantity = catchAsyncError( async (req, res, next) => { 
    
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
    const product = await Product.findById(productId)
    const listItem = cartOld.products

     // update product quantity
    const findProduct = listItem.findIndex(val => val.productId == productId)

    if(!listItem[findProduct]){
        return next(new ErrorHandler('Cart not found', 404))
    }
    const initialStock = product.stock

    listItem[findProduct].quantity += 1
    product.stock -= 1

    if(initialStock - listItem[findProduct].quantity < 0)
    {
        return next(new ErrorHandler('Out of stock', 404))
    }

    cartOld.totalPrice = listItem.reduce((acc,val) => {
        return acc + (val.priceDeal * val.quantity)
    },0)


    await Cart.findByIdAndUpdate(cartOld._id,cartOld,config)
    await Product.findByIdAndUpdate(productId,product,config)

    res.status(201).json({
        success: true,
    })
})