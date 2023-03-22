const express = require('express')
const router = express.Router()


const { useVoucher } = require('../controllers/guestVoucherController')

router.route('/use-voucher').post(useVoucher)

module.exports = router