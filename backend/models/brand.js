const mongoose = require('mongoose')


const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    logo: {
        type: String
    }
   
},
{
    toJSON: {
        transform(doc,ret) {
            delete ret.__v;
        }
    }
})

module.exports = mongoose.model('Brand', brandSchema);