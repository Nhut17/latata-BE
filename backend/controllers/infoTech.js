const infoTech = require('../models/infoTech')


exports.addInfoTech = async (req,res) => {

    const {id_cate,title} = req.body

    const find_id_cate = await infoTech.findOne({
        id_cate:id_cate
    })



    if(!find_id_cate)
    {
        const info = await infoTech.create({
            id_cate,
            info_tech: [
                {
                    title
                }
            ]
            
        })

        res.status(201).json({
            success: true,
            info
        })
    }
    else{
        const arr_tech = find_id_cate.info_tech

        const indx = arr_tech.findIndex(el => el.title.toLowerCase() == title.toLowerCase())

        if(indx >=0 )
        {
            res.status(400).json({
                mess: 'Thông tin kỹ thuật đã tồn tại!'
            })
            return
        }
        else{
            
            const update = [...arr_tech,{
                title
            }]

            const update_tech = await infoTech.findOneAndUpdate(
                {
                    id_cate: id_cate
                },
                {
                    info_tech: update
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

}

// delete
exports.deleteInfoTech = async (req, res) => {

    const {  id_info_tech } = req.body

    const {id} = req.params

    const info = await infoTech.findById(id)


    if(!info)
    {
        res.status(401).json({
            success: false,
            message: 'id not found',
        }) 
        return;
    }

    try{

        let arr_tech = info.info_tech;
    
        const idx_tech = arr_tech.findIndex(val => val._id == id_info_tech)
        

        if(idx_tech === -1) 
        {
            res.status(401).json({
            success: false,
            message: 'Invalid'
            })
            return
        }

     
        arr_tech.splice(idx_tech, 1)

        const update =  {
            info_tech: arr_tech
        }

      

        await infoTech.findOneAndUpdate(
            {
                _id: id
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
            mess: 'Removed successfully'
        })
    }
    catch(err){
        console.log(err)
    }

}

// get all
exports.getInfoTech  = async (req,res) => {


    const { id } = req.params

  

    const info_tech = await infoTech.findOne({
        id_cate: id
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
        info_tech
    })

}