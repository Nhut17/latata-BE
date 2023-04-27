const mongoose = require('mongoose')

const salesCategory = mongoose.Schema({
    categories: [
        {
            cate: String,
            sales_cate : Number,
            quantity: Number,
        }
    ],
    year: Number,
    month: Number
})

module.exports = mongoose.model('SalesCategory', salesCategory)