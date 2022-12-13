const nodemailer = require('nodemailer')
require('dotenv').config();

const sendEmail = async options => {

  try{

   

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
      }
    });

    // mail option
    let info = await transporter.sendMail({
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: "<b>Hello</b>"
    })

    console.log(info)

  }
  catch(err){
    console.log(err)
  }

    // var transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //       user: process.env.SMTP_EMAIL,
    //       pass: process.env.SMTP_PASSWORD
    //     }
    //   });

      // const message = {
      //   from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      //   to: options.email,
      //   subject:options.subject,
      //   text:options.message
      // }

      // await transporter.sendMail(message)

}

module.exports = sendEmail;