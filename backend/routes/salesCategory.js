const express = require('express')
const router = express.Router()


const { addSaleCate, salesCate, sale, selectSalesCate } = require('../controllers/salesCategoryController')


router.route('/sales-cate/add').post(addSaleCate)
router.route('/sales-cate-year').post(salesCate)
router.route('/sales-cate-month').post(selectSalesCate)

module.exports = router