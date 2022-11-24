const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategory,
    getCategoryById

 } = require('../controllers/categoryController')