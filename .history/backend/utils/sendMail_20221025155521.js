const nodemailer = require('nodemailer')

const sendEmail = async options => {

    var transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_,
          pass: "8097f52f4316d5"
        }
      });


}

module.exports = sendEmail;