const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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
            delete 
        }
    }
}
)

module.exports = mongoose.model("Category", categorySchema);