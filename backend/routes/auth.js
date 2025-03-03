const express = require('express')
const router = express.Router()


const { registerUser, 
    loginUser, 
    forgotPassword, 
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    logout,
    getUserDetails, 
    updateUser, 
    refreshToken,
    verifyOtp,
    deleteUser,
    permissionStaff } = require('../controllers/authController')


const { isAuthenticatedUser , authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset').put(resetPassword)

router.route('/password/verify-otp').post(verifyOtp)

router.route('/logout').get(logout)

router.route('/profile').get(isAuthenticatedUser,authorizeRoles('user'),getUserProfile)
router.route('/password/update').put(isAuthenticatedUser,authorizeRoles('user'),updatePassword)
router.route('/profile/update').put(isAuthenticatedUser,authorizeRoles('user'),updateProfile)

router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),allUsers)

router.route('/admin/user/:id')
        .get(getUserDetails)
        .put(updateUser)
        .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser)



router.route('/refresh-token').post(refreshToken)

router.route('/admin/permission/:id').put(permissionStaff)

module.exports = router;