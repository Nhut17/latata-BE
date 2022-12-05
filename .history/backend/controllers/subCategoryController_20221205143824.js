const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')

exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {
    try{

        const subCategory = new SubCategory({
            category_id: req.body.category_id,
            sub_category: req.body.sub_category
        })

        res.status(201).json({
            success: true,
            subCategory
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: 'Error'
        })
    }
})