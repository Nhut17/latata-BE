const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({

    sub_category: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("SubCategory", subCategorySchema);