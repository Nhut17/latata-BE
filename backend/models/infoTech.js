const mongoose  = require('mongoose')

const infoTechSchema = mongoose.Schema({
    id_cate: {
        type:String
    },
    info_tech: [
        {
            title: {
                type:String
            },
            content: {
                type:String,
                default: ''
            }
            
        }
    ]
})

module.exports = mongoose.model('InfoTech', infoTechSchema)