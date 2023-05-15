
const express = require('express')
const router = express.Router()

const { addVoucher, removeVoucher, getVouchers , sendVoucherAll} = require('../controllers/voucherController')

router.route('/voucher/add').post(addVoucher)
router.route('/voucher/:id').delete(removeVoucher)

router.route('/voucher/send-all').post(sendVoucherAll)
router.route('/voucher').get(getVouchers)

module.exports = router