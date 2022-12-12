const express = require('express')
const router = express.Router()


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/upload/image').post(uploadImage)


module.exports = router
