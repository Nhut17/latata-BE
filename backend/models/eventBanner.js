const mongoose = require('mongoose')

const eventBanner = new mongoose.Schema({

    name: {
        type: String
    },
    images: [
        {
            url_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ]    

})

module.exports = mongoose.model('EventBanner', eventBanner)