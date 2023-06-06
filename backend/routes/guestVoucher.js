const express = require('express')
const router = express.Router()


const { useVoucher,getUserVoucher } = require('../controllers/guestVoucherController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/use-voucher').post(isAuthenticatedUser,authorizeRoles('user'),useVoucher)
router.route('/user-voucher').get(isAuthenticatedUser,authorizeRoles('user'),getUserVoucher)

module.exports = router