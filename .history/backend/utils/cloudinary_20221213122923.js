const cloudinary = require('cloudinary').v2
const {CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer');

// setting up cloudinary config
cloudinary.config({
    cloud_name: 'dbhjhvgcr',
    api_key: '581993492829265',
    api_secret: 'sYf15Luto58liArk2cN4klOahjA',
})


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'Product'
    }
  });
  const uploadCloud = multer({ 
    storage: storage,
    limits:{
        fileSize: 1024* 102
    }
   }).single('image');
  
  module.exports = uploadCloud;