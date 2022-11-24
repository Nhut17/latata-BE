const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    [
        {
            product:{
                type: ObjectId,
                ref: 'Product'
            },
            price: Number,
            quantity: Number,
            user: ObjectId
        }
    ]
)


module.exports  = mongoose.model('Cart',cartItemSchema)