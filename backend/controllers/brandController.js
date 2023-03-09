const { response } = require('express')
const Brand = require('../models/brand')
const cloudinary = require('cloudinary')

exports.addBrand = async(req,res) => {

    const {name, logo} = req.body

    try{
        // const ret = await cloudinary.uploader.upload(logo, {
        //     folder: 'brand'
        // })

        const brand = await Brand.create({
            name,
            logo: 'ret.secure_url'
        })

        console.log('success')

        res.status(201).json({
            success: true,
            brand
        })
        
    }
    catch(err){
        console.log(err)
    }

    // const brand = await Brand.


}