const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");
import { cloudinary } = require('../utils/cloudinary');

exports.uploadImage = async(req, res, next) => {
    
  const fileData = req.body.data
  // const upload = await cloudinary.upload
    console.log(fileData);


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