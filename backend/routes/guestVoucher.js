const express = require('express')
const router = express.Router()


const { useVoucher } = require('../controllers/guestVoucherController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/use-voucher').post(isAuthenticatedUser,authorizeRoles('user'),useVoucher)

module.exports = router