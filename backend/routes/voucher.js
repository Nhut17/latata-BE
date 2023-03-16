
const express = require('express')
const router = express.Router()

const { addVoucher } = require('../controllers/voucherController')

router.route('/voucher/add').post(addVoucher)


module.exports = router