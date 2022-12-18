const mongoose = require("mongoose");

const Category = require('../models/category')

exports.getCategories = async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.createCategory = async (req, res) => {
    const data = new Category({
      name: req.body.name,
    });
  
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.getCategoryById = async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.status(201).json({ 
        message: error.message,
        product: data
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.updateCategory =  async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await Category.findByIdAndUpdate(id, updatedData, options);
  
      res.send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.deleteCategory =  async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Category.findByIdAndDelete(id);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.getSubCategoryById = async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);

      res.status(201).json({ 
        message: error.message,
        sub: data.sub_category
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


// create subcategory
exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {

  const { category_id, sub_category } = req.body

  const findIdCate = await Category.findById(category_id)

  if(!findIdCate){
      return next(new ErrorHandler('Category_id not found'));
  }

  const duplicateSubCate = await SubCategory.findOne({
      sub_category: req.body.sub_category
  })


  if(duplicateSubCate)
  {
      if(duplicateSubCate.sub_category.includes(sub_category)){
          return next(new ErrorHandler('Sub category is existed'));
      }
  }

  const subCategory = new SubCategory({
      category_id: req.body.category_id,
      sub_category: req.body.sub_category
  })
  try{

     const subcategory = await subCategory.save()

      res.status(201).json({
          success: true,
          subcategory
      })
  }
  catch(err){
      res.status(400).json({
          success: false,
          message: 'Error'
      })
  }
})