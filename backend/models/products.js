const mongoose = require('mongoose');
const moment = require('moment-timezone');
const date = new Date()
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true,  'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 10 characters'],     
    },
    price: {
        type: Number,
        required: [true,  'Please enter product price'],
        maxLength:[5,'Product price cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true,  'Please enter product description'],
      
    },
    info_tech: [{
        title: {
            type: String,
        },
        content: {
            type: String
        }
    }],
    promotion: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    },
    images:[
        {
            url_id: String,
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, ' Please select category for this product'],
        ref: 'Category'
    },
    subCate: {
        type: String,
    },
    priceDeal: {
        type: Number,
        default: 0.0
    },
    stock: {
        type: Number,
        required: [true, ' Please enter product stock '],
        maxLength:[5,'Product name cannot exceed 5 characters'],
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type:String,
                required:true,
            },
            avatar: {
                url_id: String,
                url: {
                    type: String,
                    required: true
                },
            },
            commentAt: {
                type: String,
                default: moment.tz(date.getTime(),'Asia/Bangkok').format(`HH:ma | ${date.getDate()}-MM-YYYY`)
            }

        }
    ],
    sold: {
        type: Number,
        default: 0
    },
    brand: {
        type: String
    },
    createdAt: {
        type: String,
        default: moment.tz(date.getTime(),'Asia/Bangkok').format(`HH:ma | ${date.getDate()}-MM-YYYY`)
    },
    


})
module.exports = mongoose.model('Product',productSchema)