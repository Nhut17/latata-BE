const express  = require('express');
const router = express.Router()

const { saleFigure, selectSales } = require('../controllers/saleFigureController')

router.route('/sale-figures').get(saleFigure)

router.route('/date-sales').post(selectSales)


module.exports = router