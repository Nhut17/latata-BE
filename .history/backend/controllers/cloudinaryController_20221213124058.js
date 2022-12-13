const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");
const cloudi = require('cloudinary').v2

exports.uploadImage = async(req, res, next) => {
    
  const fileData = req.files
    console.log(fileData);

    const ret = await cloud

    // if (!req.files) {
    //     next(new Error('No file uploaded!'));
    //     return;
    //   }
     
    // res.json({ secure_url: req.file.path });
    res.json({ success: true });
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