const mongoose = require('mongoose')

const salesCategory = mongoose.Schema({
    categories: [
        {
            cate: {
                type: String,
            },
            sales_cate : {
                type: Number,
            },
            quantity: Number,
        }
    ],
    year: Number,
    month: Number
})

module.exports = mongoose.model('SalesCategory', salesCategory)