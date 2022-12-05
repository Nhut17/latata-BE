const mongoose = require('mongoose');
const category_id = new mongoose.Types.ObjectId()


const categorySchema = new mongoose.Schema({
    categ
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