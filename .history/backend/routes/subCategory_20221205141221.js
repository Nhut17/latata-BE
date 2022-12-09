const express = require('express')
const router = express.Router();

const { createSubCategory } = require('../controllers/subCategoryController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')


router.route('/subCategory/create', createSubCategory)

module.exports = router