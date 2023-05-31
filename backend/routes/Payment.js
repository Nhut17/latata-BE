const express = require('express')
const router = express.Router()

const { createPayment, returnPayment, vnpayIpn, queryDr } = require('../controllers/PaymentController')

router.route('/create-payment/:money').get(createPayment)
router.route('/vnpay-return').get(returnPayment)
router.route('/vnpay-ipn').get(vnpayIpn)
router.route('/querydr').post(queryDr)

module.exports = router