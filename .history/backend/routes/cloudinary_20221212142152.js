const express = require('express')
const router = express.Router()
// const { uploadImage } = require('../controllers/cloudinaryController')
// const fileUploader  = require('../utils/cloudinary')
const  = require('../utils/cloudinary')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/upload/image').post(uploadImage.single('image'),uploadImage)


module.exports = router
