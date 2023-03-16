
const express = require('express')
const router = express.Router()

const { addVoucher, removeVoucher, getVouchers } = require('../controllers/voucherController')

router.route('/voucher/add').post(addVoucher)
router.route('/voucher/:id').delete(removeVoucher)


router.route('/voucher').get(getVouchers)

module.exports = router