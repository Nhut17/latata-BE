const cloudinary = require('cloudinary').v2
// const {CloudinaryStorage } = require('multer-storage-cloudinary')
// const multer = require('multer');


// setting up cloudinary config



// const storage = new CloudinaryStorage({
//     cloudinary,
//     allowedFormats: ['jpg', 'png'],
//     params: {
//         folder: 'images'
//     }
//   });
//   const uploadCloud = multer({ storage });
  
  module.exports = cloudinary;