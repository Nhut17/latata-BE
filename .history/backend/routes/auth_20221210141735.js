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
    deleteUser } = require('../controllers/authController')


const { isAuthenticatedUser , authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(isAuthenticatedUser,authorizeRoles('user'),forgotPassword)
router.route('/password/reset/:token').put(isAuthenticatedUser,authorizeRoles('user'),resetPassword)

router.route('/logout').get(isAuthenticatedUser,logout)

router.route('/profile').get(isAuthenticatedUser,authorizeRoles('user'),getUserProfile)
router.route('/password/update').put(isAuthenticatedUser,authorizeRoles('user'),updatePassword)
router.route('/profile/update').put(isAuthenticatedUser,authorizeRoles('user'),updateProfile)

router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),allUsers)

router.route('/admin/user/:id')
        .get(getUserDetails)
        .put(updateUser)
        .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser)

router.route('/admin/users').get(getAll)

router.route('/refresh-token').post(refreshToken)

module.exports = router;