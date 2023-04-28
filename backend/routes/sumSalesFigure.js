const express = require('express')

const router = express.Router()

const { getSummarySales, sumSales, selectSumSales }  = require('../controllers/sumSalesFigureController')


router.route('/sum-sales').get(getSummarySales)
router.route('/add-sum-sales').post(sumSales)
router.route('/select-sum-sales').post(selectSumSales)

module.exports = router