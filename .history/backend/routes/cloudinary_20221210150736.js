const express = require('express')
const router = express.Router()

const { uploadImage } = require('../controllers/cloudinaryController')
const fileUploader  = require('../utils/cloudinary')


router.route('/upload-image').post()


module.exports = router
