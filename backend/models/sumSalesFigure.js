const mongoose = require('mongoose');

const sumSalesFigure = mongoose.Schema({
    year: Number, 
    months: [
        {
            month: Number,
            sales: {
                type: Number,
                default: 0
            },
            users: {
                type: Number,
                default: 0
            },
            quantity_product: {
                type: Number,
                default: 0
            }
        }
    ]
})

module.exports = mongoose.model('Summary Sales Figure', sumSalesFigure)