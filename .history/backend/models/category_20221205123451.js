const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Types.
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