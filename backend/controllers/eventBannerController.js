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

    const check_event = await EventBanner.findOne({name})

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
    // console.log('images: ', images)
    console.log('imagesLinks: ', imagesLinks)

    for(let i = 0; i < images?.length; i++)
    {
        const result = await cloudinary.uploader.upload(images[i],{
            folder: 'events'
        })

        imagesLinks.push({
            url_id: result.public_id,
            url: result.secure_url
        })

    }
    console.log('imagesLinks after: ', imagesLinks)
    console.log('check : ', check_event)
    if(!check_event)
    {
        try{

        const create_event = await EventBanner.create({
            name,
            images: imagesLinks
        })
        console.log('create success')
        }
        catch(err)
        {
            console.log('err')
            console.log(err)
        }
       
    }
    else{
            try{

            const update = await EventBanner.findByIdAndUpdate(check_event._id,{
                images: imagesLinks
            })
             console.log('update success')
            }
            catch(err)
            {
                console.log(err)
            }
    }


   

    res.status(200).json({
        success: true,
        message: 'Successfully!'
    })

}


// get one event banner
exports.getOneEventBanner = async (req,res) => {

    const {name} = req.body

    const find_one = await EventBanner.findOne({name})


    if(!find_one)
    {
        res.status(404).json({
            success: false,
            message: "Can't get one event banner"
        })
    }

    res.status(201).json({
        success: true,
        eventBanner: find_one 
    })


}


// get all banner
exports.getAllBanner = async (req,res) => {
    const find_banner = await EventBanner.find()

    res.status(201).json({
        success: true,
        event_banner: find_banner
    })
}
