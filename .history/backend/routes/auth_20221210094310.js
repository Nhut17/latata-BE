const express = require('express')
const router = express.Router()


const { registerUser, 
    loginUser, 
    forgotPassword, 
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,logout,
    getUserDetails, 
    updateUser, 
    refreshToken,
    deleteUser } = require('../controllers/authController')


const { isAuthenticatedUser , authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

router.route('/logout').get(logout)

router.route('/profile').get(isAuthenticatedUser,authorizeRoles,getUserProfile)
router.route('/password/update').put(updatePassword)
router.route('/profile/update').put(updateProfile)

router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),allUsers)

router.route('/admin/user/:id')
        .get(getUserDetails)
        .put(updateUser)
        .delete(deleteUser)

router.route('/refresh-token').post(refreshToken)

module.exports = router;