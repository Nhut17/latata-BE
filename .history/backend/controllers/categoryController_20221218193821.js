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
exports.createSubCategory =  async(req,res) => {

    const cateId = req.params.id

    const category = await Category.findById(cateId)

    const { sub_category } = req.body

    try{
          âi
    }
    catch(err){
      console.log(err)
    }

    res.status(400).json({
          success: false,
          message: 'Error'
      })
  
}