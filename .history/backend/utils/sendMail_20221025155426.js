const nodemailer = require('nodemailer')

const sendEmail = async options => {

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c55e6697c1cdad",
          pass: "8097f52f4316d5"
        }
      });


}

module.exports = sendEmail;