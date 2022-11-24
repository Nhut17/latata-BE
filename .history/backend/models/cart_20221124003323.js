const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    [
        {
            product:[
                {
                    productId: 
                    type: ObjectId,
                    ref: 'Product'
                }
            ],
            price: Number,
            quantity: Number,
            user: {
                type: ObjectId,
                ref: 'User'
                
            }
        }
    ]
)


module.exports  = mongoose.model('Cart',cartItemSchema)