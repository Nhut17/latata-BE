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

 router.route().get(getCategories)
 router.route.get('/category/:id', getCategoryById)
 router.route.post('/category/create', authorizeRoles('admin'), createCategory)

