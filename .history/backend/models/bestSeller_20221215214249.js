const mongoose = require('mongoose');

const bestSellerSchema = new mongoose.Schema({
    productId: {
        type: ObjectId
    },
    
})

module.exports = mongoose.model("BestSeller", bestSellerSchema);