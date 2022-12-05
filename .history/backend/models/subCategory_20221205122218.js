const mongoose = require('mongoose');

const subCategory = mongoose.Schema({
    category_id: {
        type: String,
        require: true
    },
    sub_category: {
        type: String,
        require: true
    }
})