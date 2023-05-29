const express = require('express')

const router = express.Router()

const { getSummarySales, sumSales, selectSumSales, getYearsSummary }  = require('../controllers/sumSalesFigureController')



router.route('/add-sum-sales').post(sumSales)
router.route('/select-sum-sales').post(selectSumSales)
router.route('/list-year-sales').get(getYearsSummary)

module.exports = router