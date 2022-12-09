const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')

exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {
  

    try{
        const subCategory = await SubCategory(req)

        res.status(201).json({
            success: true,
            subCategory
        })
    }
    catch(err){

    }
})