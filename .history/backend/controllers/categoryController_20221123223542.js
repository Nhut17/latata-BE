const mongoose = require('mongoose')

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
      
    const category =  await Product.create(req.body)


    res.status(201).json({
        success: true,
        product
    })
};

exports.getCategoryById = async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.json(data);
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