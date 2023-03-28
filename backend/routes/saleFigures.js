const express  = require('express');
const router = express.Router()

const { saleFigure } = require('../controllers/saleFigureController')

router.route('/sale-figures').get(saleFigure)




module.exports = router