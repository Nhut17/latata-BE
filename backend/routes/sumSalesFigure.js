const express = require('express')

const router = express.Router()

const { getSummarySales, sumSales }  = require('../controllers/sumSalesFigureController')


router.route('/sum-sales').get(getSummarySales)
router.route('/add-sum-sales').post(sumSales)

module.exports = router