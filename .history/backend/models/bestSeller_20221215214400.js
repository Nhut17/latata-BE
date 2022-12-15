const mongoose = require('mongoose');

const bestSellerSchema = new mongoose.Schema({
    productId: {
        type: ObjectId
    },
    sells: {
        type: Number
    }
})

module.exports = mongoose.model("BestSeller", bestSellerSchema);