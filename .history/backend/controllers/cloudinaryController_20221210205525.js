const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");

exports.uploadImage = async(req, res) => {

    const fileData = req.body
    console.log('file: ' + fileData);

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