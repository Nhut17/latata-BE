const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const subCategory = require('../models/subCategory')

exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {
    try{
        const subCategory = await subCategory
    }
    catch(err){

    }
})