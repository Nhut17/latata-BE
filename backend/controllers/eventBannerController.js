const EventBanner = require('../models/eventBanner')
const cloudinary = require('cloudinary')





exports.createEventBanner = async (req,res) => {

    const { name } = req.body

    const check_event = await EventBanner.findOne({
        name
    })

    if(check_event)
    {
        res.status(200).json({
            message: 'Name has existed!'
        })
    }
    else{
        const eventBanner = await EventBanner.create({
            name
        })
    
        res.status(200).json({
            eventBanner
        })
    }

   
}




exports.uploadEventBanner = async (req,res) => {

    const {name} = req.body

    const check_event = await EventBanner.findOne({name: name.toLowerCase()})

    if(!check_event)
    {
        res.status(401).json({
            success: false,
            message: 'Tên không tồn tại'
        })
    }

    let images =[]
    if(typeof req.body.images === 'string')
    {
        images.push(req.body.images)
    } else{
        images = req.body.images
    }


    let imagesLinks = []

    for(let i =0; i < images.length; i++)
    {
        const result = await cloudinary.uploader.upload(images[i],{
            folder: 'events'
        })

        imagesLinks.push({
            url_id: result.public_id,
            url: result.secure_url
        })

    }

    if(!check_event)
    {
        const create_event = await EventBanner.create({
            name,
            images: imagesLinks
        })
    }
    else{
        const update = await EventBanner.findByIdAndUpdate(check_event._id,{
            images: imagesLinks
        })
    }


   

    res.status(200).json({
        success: true,
        message: 'Successfully!'
    })

}

