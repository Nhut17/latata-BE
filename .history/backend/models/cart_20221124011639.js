const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    [
        {
            productId: {
                type: ObjectId,
                ref: 'Product'
            },
            products:
            []
                {
                    name: {
                        type: String,     
                    },
                    images:[
                        {
                            public_id: {
                                type: String,
                                required: true
                            },
                            url: {
                                type: String,
                                required: true
                            },
                        }
                    ],
                    price: Number
                },
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