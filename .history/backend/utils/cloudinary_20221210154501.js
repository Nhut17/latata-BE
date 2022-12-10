const cloudinary = require('cloudinary').v2
const {CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer');
// const dotenv = require('dotenv')
// dotenv.config()

console.log('1')
// setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
console.log('2')
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'images'
    }
  });
  console.log('3')
  const uploadCloud = multer({ storage });
  
  module.exports = uploadCloud;