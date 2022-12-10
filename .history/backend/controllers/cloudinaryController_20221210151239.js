const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");

exports.uploadImage = async(req, res) => {

    
    try{

        
        if (!req.file) {
            next(new Error('No file uploaded!'));
            return;
          }
         
          res.json({ secure_url: req.file.path });
    }
    catch(err){
        return next(new ErrorHandler('Error with upload image'))
    }
}