const mongoose = require('mongoose');

const sumSalesFigure = mongoose.Schema({
    year: Number, 
    months: [
        {
            month: Number,
            sales: Number,
            users: {
                type: Number,
                default: 0
            },
            quantity_product: Number
        }
    ]
})

module.exports = mongoose.model('Summary Sales Figure', sumSalesFigure)