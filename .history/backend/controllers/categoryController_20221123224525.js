const mongoose = require("mongoose");
const idAutoIncrement = require("id-auto-increment");
// const ErrorHandler = require('../utils/errorHandler')
// const catchAsyncError = require('../middlewares/catchAsyncErrors')
// const APIFeatures = require('../utils/apiFeatures')
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
      id: idAutoIncrement({
        machineBits: 1                                  // if required number machines are up to 2, this is enough.
    }),
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