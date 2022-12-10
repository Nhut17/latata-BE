const express = require('express')
const router = express.Router()

const { uploadImage } = require('../controllers/cloudinaryController')


router.route('/upload-image').post()


module.exports = router
