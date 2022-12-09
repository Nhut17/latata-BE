const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    category_id: {
        type: String,
        require: true,
        ref: 
    },
    sub_category: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("SubCategory", subCategorySchema);