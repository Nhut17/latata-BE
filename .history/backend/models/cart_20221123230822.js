const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema
const cartItemSchema = new mongoose.Schema(
    {
    product:{
        type: ObjectId,
        ref: 'Product'
    },
    name: String,
    price: Number,
    quantity: Number
    },
    {
        timestamps: true
    }
)


const cartItem  = mongoose.model('Cart',cartItemSchema)