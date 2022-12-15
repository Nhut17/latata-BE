const mongoose = require('mongoose');

const bestSellerSchema = new mongoose.Schema({
    productId: {
        type: ObjectId
    },
    sells: {
        type
    }
})

module.exports = mongoose.model("BestSeller", bestSellerSchema);