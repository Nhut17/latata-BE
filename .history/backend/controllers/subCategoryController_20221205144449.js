const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')
const Category


exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {

    const { category_id } = req.body


    const subCategory = new SubCategory({
        category_id: req.body.category_id,
        sub_category: req.body.sub_category
    })
    try{

       const dataSave = await subCategory.save()

        res.status(201).json({
            success: true,
            dataSave
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: 'Error'
        })
    }
})