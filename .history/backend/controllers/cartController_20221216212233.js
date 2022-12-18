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

    let updateQuantity = quantity ;

    // update product quantity
    var productUpdate = []                  // 1
    if(cartOld)                             // 2
    {
        const indexId = cartOld.products.findIndex(val => val.productId == productId) 
        productUpdate  = cartOld.products   // 3
        

        if( indexId !== -1)                 // 7
            {

                if(product.stock - (productUpdate[indexId].quantity + quantity) < 0)    // 8
                {
                    return next(new ErrorHandler('Product is stock', 404))      // 9
                }

                productUpdate[indexId].quantity += quantity
                product.stock -= quantity                                       // 10
            }
       
    }


    const products = {                              // 11
        name: product.name,
        images: product.images,
        price: product.price,
        promotion: product.promotion,
        priceDeal: product.priceDeal,
        quantity: updateQuantity,
        productId: productId
    }

     
    if(cartOld)                             // 12
    {
        const index = cartOld.products.findIndex(val => val.productId == productId)  // 13

        if(index !== -1)                // 14
        {
    

            const updateCart = {
                products: productUpdate,
                totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                user: userId
            }
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)     // 15
           
        }
        else                        // 16
        {


            const updateCart = {
                products: cartOld.products.concat(products),
                totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                user: userId
            }

  
            await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)     // 17
         

        }
                     
    }
    else{                       // 18
         await Cart.create({    // 19
            products,
            totalPrice: products.priceDeal * products.quantity,
            user: userId
        })
       
    }

    res.status(201).json({      // 20
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
    })                                      // 1


    const config = {                        // 2
        new: true,
        runValidators: true,
        useFindAndModify: true
    }
    
    const listItem = getCart.products     
    const findItemCart = listItem.findIndex( item => item.productId == req.params.id)  // 3

    if(!getCart){                           // 4
        return next(new ErrorHandler('Cart not found', 404))    // 5
    }

    if(findItemCart === -1){                // 6
        return next(new ErrorHandler('Item cart not found', 404))       // 7
    }

    await listItem[findItemCart].remove()       // 8
   
    getCart.totalPrice = listItem.reduce((acc,val) => {         // 9
        return acc + (val.priceDeal * val.quantity)
    },0)
 
    await Cart.findByIdAndUpdate(getCart._id,getCart,config)   
   
    res.status(201).json({                                      // 10
        success: true,
        message:'Cart is deleted',
    })
})

// Decrease quantity item cart
exports.decreaseQuantity = catchAsyncError( async (req, res, next) => { 
    
    const config = {                    // 1
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    // get user current
    const  userId  = req.user[0]._id       

     // cart is already
    const cartOld = await Cart.findOne({        // 2
        user: userId
    })

    if(!cartOld){                               // 3
        return next(new ErrorHandler('Cart not found', 404))       // 4
    }

    const productId = req.params.id
    const listItem = cartOld.products

     // update product quantity
    const findProduct = listItem.findIndex(val => val.productId == productId)   // 5

    if(!listItem[findProduct]){                                 // 6
        return next(new ErrorHandler('Cart not found', 404))    // 7
    }
    
    listItem[findProduct].quantity -= 1                         // 8
   
    if(listItem[findProduct].quantity === 0){                   // 9
        await listItem[findProduct].remove()                    // 10
    }

    cartOld.totalPrice = listItem.reduce((acc,val) => {         // 11
        return acc + (val.priceDeal * val.quantity)
    },0)
    
    await Cart.findByIdAndUpdate(cartOld._id,cartOld,config)
  
    res.status(201).json({                                      // 12
        success: true,
     
    })
})

// Increase quantity item cart
exports.increaseQuantity = catchAsyncError( async (req, res, next) => { 
    
    const config = {                    // 1
        new: true,
        runValidators: true,
        useFindAndModify: true
    }

    // get user current
    const  userId  = req.user[0]._id

     // cart is already
     const cartOld = await Cart.findOne({   // 2
        user: userId
    })

    if(!cartOld){                           // 3
        return next(new ErrorHandler('Cart not found', 404))    // 4
    }

    const productId = req.params.id
    const product = await Product.findById(productId)
    const listItem = cartOld.products

     // update product quantity
    const findProduct = listItem.findIndex(val => val.productId == productId)   // 5

    if(!listItem[findProduct]){ 2               // 6
        return next(new ErrorHandler('Cart not found', 404))            // 7
    }
    const initialStock = product.stock

    listItem[findProduct].quantity += 1             // 8


    if(initialStock - listItem[findProduct].quantity < 0)   // 9
    {
        return next(new ErrorHandler('Out of stock', 404))  // 10
    }

    cartOld.totalPrice = listItem.reduce((acc,val) => {     // 11
        return acc + (val.priceDeal * val.quantity)
    },0)

    await Cart.findByIdAndUpdate(cartOld._id,cartOld,config)
   
    res.status(201).json({                                  // 12
        success: true,
    })
})