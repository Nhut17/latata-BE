const express  = require('express');
const router = express.Router()

const { saleFigure, selectSales, addSaleFigure } = require('../controllers/saleFigureController')

router.route('/sale-figures').get(saleFigure)

router.route('/date-sales').post(selectSales)

router.route('/add-sales').post(addSaleFigure)


module.exports = router