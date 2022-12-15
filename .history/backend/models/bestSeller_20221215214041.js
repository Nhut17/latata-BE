const mongoose = require('mongoose');

const bestSellerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    sub_category: [{
        type:String,
        unique: true,
    }]
}
)

module.exports = mongoose.model("BestSeller", bestSellerSchema);