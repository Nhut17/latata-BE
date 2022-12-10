const mongoose = require("mongoose");

exports.uploadImage = async(req, res) => {
    try{
        if (!req.file) {
            next(new Error('No file uploaded!'));
            return;
          }
         
          res.json({ secure_url: req.file.path });
    }
    catch(err){
        return next(new ErrorHandler('Old password is incorrect'))
    }
}