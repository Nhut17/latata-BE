const express  = require('express');
const router = express.Router()

const { topCustomer } = require('../controllers/saleFigureController')

router.route('/top-customer').get(topCustomer)


module.exports = router