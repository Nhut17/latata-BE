const express = require('express')
const router = express.Router()

const { createPayment, returnPayment, vnpayIpn } = require('../controllers/PaymentController')

router.route('/create_payment').post(createPayment)
router.route('/vnpay_return').get(returnPayment)
router.route('/vnpay_ipn').get(vnpayIpn)


module.exports = router