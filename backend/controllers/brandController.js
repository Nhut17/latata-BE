const { response } = require('express')
const Brand = require('../models/brand')
const cloudinary = require('cloudinary')

exports.addBrand = async(req,res) => {

    const {name, logo} = req.body

    try{
        const ret = await cloudinary.uploader.upload(logo, {
            folder: 'logo_brand'
        })

        console.log(ret)

        const brand = await Brand.create({
            name,
            logo: ret.secure_url
        })


        res.status(201).json({
            success: true,
            brand
        })
        
    }
    catch(err){
        console.log(err)
    }

    


}

// delete brand
exports.deleteBrand = async (req,res) => {

    const { id } = req.params

    const brand = await Brand.findById(id)

    if(!brand){
        res.status(401).json({
            success: false,
            message: 'ID not found',
        }) 
    }

    try {
        await brand.remove()
        res.status(200).json({
            success: true,
            message: 'Brand removed successfully'
        })
    }
    catch(err){
        console.log(err)
    }


}

// update brand
exports.updateBrand = async (req,res) => {
    const { id } = req.params
    
    const idBrand = await Brand.findById(id)

    if(!idBrand){
        res.status(401).json({
            success: false,
            message: 'Invalid id'
        })

        return ;
    }

    const brand = await Brand.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
        brand
    })

}


// get brands
exports.getBrand = async (req,res) => {

    const brand = await Brand.find()

    res.status(200).json({
        brand
    })

}