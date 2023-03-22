const mongoose  = require('mongoose')

const infoTechSchema = mongoose.Schema({
    id_cate: {
        type:String
    },
    info_tech: [
        {
            type:String,
            
        }
    ]
})

module.exports = mongoose.model('InfoTech', infoTechSchema)