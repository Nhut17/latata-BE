const infoTech = require('../models/infoTech')


exports.addInfoTech = async (req,res) => {

    const {id_cate,info_tech} = req.body

    const find_id_cate = await infoTech.findOne({
        id_cate:id_cate
    })

 

    if(!find_id_cate)
    {
        const info = await infoTech.create(req.body)

        res.status(201).json({
            success: true,
            info
        })
    }
    else{
        const arr_tech = find_id_cate.info_tech
      
        
        if(arr_tech?.includes(info_tech))
        {
    
            res.status(400).json({
                mess: 'Info technical existed!'
            })

            return;
        }

        const update_tech = await infoTech.findOneAndUpdate(
            {
                id_cate: id_cate
            },
            {
                info_tech: arr_tech?.concat(info_tech)
            }, 
            {
                new: true,
                runValidators: true,
                useFindAndModify: false,
            }
            )

            res.status(201).json({
                success: true,
                info_tech: update_tech
            })

    }

}

// delete
exports.deleteInfoTech = async (req, res) => {

    const { id_cate, info_tech } = req.body

    const info = await infoTech.findOne({
        id_cate: id_cate
    })



    if(!info)
    {
        res.status(401).json({
            success: false,
            message: 'id_cate not found',
        }) 
        return;
    }

    try{

        const arr_tech = info.info_tech;


        const idx_tech = arr_tech.indexOf(info_tech)


        if(idx_tech === -1) 
        {
            res.status(401).json({
            success: false,
            message: 'Invalid'
            })
        }

       

        const update =  {
            info_tech: arr_tech?.splice(idx_tech,1)
        }

 

        await infoTech.findOneAndUpdate(
            {
                id_cate:id_cate
            },
            update,
            {
                new: true,
                runValidators: true,
                useFindAndModify: false,
            }
            )
        res.status(200).json({
            success: true,
            message: ' Removed successfully'
        })
    }
    catch(err){
        console.log(err)
    }

}

// get all
exports.getInfoTech  = async (req,res) => {

    const { id_cate } = req.body

    const info_tech = await infoTech.findOne({
        id_cate: id_cate
    })

    if(!info_tech)
    {
        res.status(400).json({
            mess: 'Invalid info tech!'
        })

        return;
    }

    res.status(201).json({
        success: true,
        info: info_tech.info_tech
    })

}