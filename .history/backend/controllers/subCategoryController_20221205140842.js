const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')

exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {
    const {  }= req.body   

    try{
        const subCategory = await SubCategory
    }
    catch(err){

    }
})