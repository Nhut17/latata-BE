const mongoose = require('mongoose');
const moment = require('moment-timezone');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    sub_category: [{
        type:String,
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

module.exports = mongoose.model("Category", categorySchema);