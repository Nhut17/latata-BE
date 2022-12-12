const nodemailer = require('nodemailer')
require('dotenv').config();

const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure:false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // // mail option
    // await transporter.sendMail({
    //     from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
    //     to: options.email,
    //     subject: options.subject,
    //     text: options.message,
    //     html: "<b>Hello</b>"
    // })
      const message = {
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: "<b>Hello</b>"
      }
      console.log(options.email)
      await transporter.sendMail(message)

}

module.exports = sendEmail;