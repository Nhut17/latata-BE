const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");

exports.uploadImage = async(req, res, next) => {
    
    console.log(req.headers);
    const fileData = req.im
    console.log(fileData);
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
      }
     
    res.json({ secure_url: req.file.path });
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