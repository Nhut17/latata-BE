const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    [
        {
            products:[
                {
                    productId: {
                        type: ObjectId,
                        ref: 'Product'
                    },
                    name: {
                        type: String,
                       
                    },
                    images:{
                        type: String,
                        required: true
                    },
                    price: Number
                }
            ],
            totalPrice: Number,
            quantity: Number,
            user: {
                type: ObjectId,
                ref: 'User'
                
            }
        }
    ]
)


module.exports  = mongoose.model('Cart',cartItemSchema)