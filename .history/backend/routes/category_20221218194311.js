const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getSubCategoryById,
    createSubCategory
 } = require('../controllers/categoryController')

 const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

 router.route('/categories').get(getCategories)
 router.route('/category/:id').get( getCategoryById)
 router.route('/category/sub/:id').get(getSubCategoryById)
 router.route('/category/create').post(isAuthenticatedUser, authorizeRoles('admin'), createCategory)
 router.route('/category/create').post(isAuthenticatedUser, authorizeRoles('admin'), createCategory)

 router.route('/category/:id')
            .put(isAuthenticatedUser, authorizeRoles('admin'), updateCategory)
            .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteCategory)

module.exports = router;