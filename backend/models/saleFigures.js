const mongoose = require('mongoose');


const saleFigures = mongoose.Schema({
    top_customer:[
        {
            type:String
        }
    ],
    top_sales_week:{
        type: Number
    },
    top_sales_month: {
        type: Number
    },
    top_sales_year:{
        type:Number
    }
})