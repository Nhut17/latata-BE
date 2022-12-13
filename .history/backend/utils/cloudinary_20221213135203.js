const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer');

// setting up cloudinary config
cloudinary.config({
    cloud_name: 'dbhjhvgcr',
    api_key: '581993492829265',
    api_secret: 'sYf15Luto58liArk2cN4klOahjA',
})

// const storage = new CloudinaryStorage({
//     cloudinary,
//     formats: ['jpg', 'png'],
//     params: {
//         folder: 'Product'
//     }
//   });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

  const uploadCloud = multer({ 
    storage
   }).single('image');
  
  module.exports = uploadCloud;