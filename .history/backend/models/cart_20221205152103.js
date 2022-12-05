const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
        {
            products:
            [
                {
                    name: {
                        type: String,     
                    },
                    images:[
                            url: {
                                type: String,
                                required: true
                            },
                    ],
                    price: Number,
                    quantity: Number,
                    productId: {
                        type: ObjectId
                    }
                }
            ],
            totalPrice: Number,
            quantity: Number,
            user: {
                type: ObjectId,
                ref: 'User',
                required: true
            }
        }
)


module.exports  = mongoose.model('Cart',cartItemSchema)