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
},
{
    timestamps:true,
    toJSON: {
        transform(doc,ret) {
            delete ret.__v;
        }
    }
}
)

module.exports = mongoose.model("Category", bestSellerSchema);