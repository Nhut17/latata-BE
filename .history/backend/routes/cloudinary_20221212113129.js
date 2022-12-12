const express = require('express')
const router = express.Router()
const multer = require("multer");
const upload = multer();

const { uploadImage } = require('../controllers/cloudinaryController')
const fileUploader  = require('../utils/cloudinary')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/upload/image').post(uploadImage)


module.exports = router
