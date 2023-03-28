const mongoose = require('mongoose');


const saleFigures = mongoose.Schema({
   order_date: {
        type:String
   },
   sales: {
        type: Number
   },
   quantity: {
        type: Number
   },
   total_order: {
        type: Number,
        default: 1
   }

})

module.exports = mongoose.model('Sale Figures', saleFigures)