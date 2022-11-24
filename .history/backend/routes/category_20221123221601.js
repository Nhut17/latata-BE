const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
 } = require('../controllers/categoryController')

 const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

 router.get('/category', getCategories)
 router.get('/')