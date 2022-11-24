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
                    },
                    price: Number
                }
            ],
            totalPrice: Number,
            quantity: Number
        }
    ]
)


module.exports  = mongoose.model('Cart',cartItemSchema)