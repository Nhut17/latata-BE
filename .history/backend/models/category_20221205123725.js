const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Types.ObjectId(),
        req
    },
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    }
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