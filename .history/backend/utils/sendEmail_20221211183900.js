const nodemailer = require('nodemailer')
const { google }  = require('googleapis')
const dotenb = require('dotenv')
dotenb.config()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const sendEmail = async options => {

  try{

    const accessToken = await oAuth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure:false,
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