const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')

exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {
    const { _id} = req.body

    try{
        const subCategory = await SubCategory
    }
    catch(err){

    }
})