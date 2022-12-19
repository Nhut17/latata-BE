const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')


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
          
  
          if( indexId !== -1)                 // 4
              {
  
                  if(product.stock - (productUpdate[indexId].quantity + quantity) < 0)    // 5
                  {
                      return next(new ErrorHandler('Product is stock', 404))      // 6
                  }
  
                  productUpdate[indexId].quantity += quantity
                  product.stock -= quantity                                       // 7
              }
         
      }
  
  
      const products = {                              // 8
          name: product.name,
          images: product.images,
          price: product.price,
          promotion: product.promotion,
          priceDeal: product.priceDeal,
          quantity: updateQuantity,
          productId: productId
      }
  
       
      if(cartOld)                             // 9
      {
          const index = cartOld.products.findIndex(val => val.productId == productId)  // 10
  
          if(index !== -1)                // 11
          {
      
  
              const updateCart = {
                  products: productUpdate,
                  totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                  user: userId
              }
              await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)     // 12
             
          }
          else                        // 13
          {
  
  
              const updateCart = {
                  products: cartOld.products.concat(products),
                  totalPrice: cartOld.totalPrice + (products.priceDeal*quantity),
                  user: userId
              }
  
    
              await Cart.findByIdAndUpdate(cartOld._id,updateCart,config)     // 14
           
  
          }
                       
      }
      else{                       // 15
           await Cart.create({    // 16
              products,
              totalPrice: products.priceDeal * products.quantity,
              user: userId
          })
         
      }
  
      res.status(201).json({      // 17
          success: true,
      })
  
  })