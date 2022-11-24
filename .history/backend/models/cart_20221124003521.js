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
                        required: true
                    },
                    images:{
                        type: String,
                        required: true
                    },
                    totalPrice: N
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