const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");
const  { cloudinary }  = require('../utils/cloudinary');

exports.uploadImage = async(req, res, next) => {
    
  try{

    const fileData = req.body.data
    const upload = await cloudinary.uploader.upload(fileData,{
      upload_preset: 'latata'
    })
    console.log(upload)
    res.json({ msg: 'YYYYYY' });
  }
  catch(err){
    console.error(err)
    res.status()
  }

  // if (!req.files) {
    //     next(new Error('No file uploaded!'));
    //     return;
    //   }
     
    // res.json({ secure_url: req.file.path });
    // res.json({ success: true });
    // try{

        
    //     if (!fileData) {
    //         next(new Error('No file uploaded!'));
    //         return;
    //       }
         
    //       res.json({ secure_url: req.file.path });
    // }
    // catch(err){
    //     return next(new ErrorHandler('Error with upload image'))
    // }
}