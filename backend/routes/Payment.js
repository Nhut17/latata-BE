const express = require('express')
const router = express.Router()

const { createPayment } = require('../controllers/PaymentController')

router.route('/create-payment').post(createPayment)


module.exports = router