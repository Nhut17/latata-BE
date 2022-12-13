const express = require('express')
const router = express.Router()
const { uploadImage } = require('../controllers/cloudinaryController')
const fileUploader  = require('../utils/cloudinary')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/upload/image').post(uploadImage.single('image'),uploadImage)

router.post('/upload/image', fileUploader.single('image'),(req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
   
    res.json({ secure_url: req.file.path });
  });)


module.exports = router
