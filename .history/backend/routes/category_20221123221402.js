const express = require('express')
const router = express.Router()

const {
    getCategories,
    create

 } = require('../controllers/categoryController')