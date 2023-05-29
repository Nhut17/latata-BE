const mongoose = require('mongoose')

const topSalesUser = new mongoose.Schema({
    month: Number,
    year: Number,
    top: [
        {
            name: String,
            email: {
                type: String
            },
            phone: Number,
            wallet: {
                type: Number,
                default: 0
            }
        }
    ]
})

module.exports = mongoose.model('TopSalesUser',topSalesUser)