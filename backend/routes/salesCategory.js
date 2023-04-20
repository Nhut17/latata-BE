const express = require('express')
const router = express.Router()


const { addSaleCate, salesCate, sale } = require('../controllers/salesCategoryController')


router.route('/sales-cate/add').post(addSaleCate)
router.route('/sales-cate').get(salesCate)

module.exports = router