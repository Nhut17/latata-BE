const express = require('express')
const router = express.Router()
// const { uploadImage } = require('../controllers/cloudinaryController')
// const fileUploader  = require('../utils/cloudinary')
const uploadImage = require('../')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/upload/image').post(uploadImage)


module.exports = router
