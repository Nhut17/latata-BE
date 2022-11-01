const express = require('express')
const router = express.Router()


const { registerUser, loginUser, forgotPassword, resetPassword,getUserProfile,updatePassword,updateProfile,allUsers,logout} = require('../controllers/authController')


const { isAuthenticatedUser , authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

router.route('/logout').get(logout)

router.route('/profile').get(isAuthenticatedUser,getUserProfile)
router.route('/password/update').put(isAuthenticatedUser,updatePassword)
router.route('/profile/update').put(isAuthenticatedUser,updateProfile)

module.exports = router;