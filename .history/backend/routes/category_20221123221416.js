const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    delete

 } = require('../controllers/categoryController')