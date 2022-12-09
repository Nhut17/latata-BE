const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const subCategory = require('../models/subCategory')

const createSubCategory = catchAsyncErrors( async(req,res))