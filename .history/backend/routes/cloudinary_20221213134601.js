const express = require('express')
const router = express.Router()
const { uploadImage } = require('../controllers/cloudinaryController')
const fileUploader  = require('../utils/cloudinary')
require('dotenv').config

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/upload/image').post(uploadImage.single('image'),uploadImage)

router.post('/upload/image',fileUploader.single('image'),uploadImage)


module.exports = router
