const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    [
        {
            product:{
                type: ObjectId,
                ref: 'Product'
            },
            name: String,
            quantity: Number
        }
    ]
)


module.exports  = mongoose.model('Cart',cartItemSchema)