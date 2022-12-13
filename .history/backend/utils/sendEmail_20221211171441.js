const nodemailer = require('nodemailer')
const { google }  = require('googleapis')


const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRET = process.env.REDIRET


const sendEmail = async options => {

    var transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });

      const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject:options.subject,
        text:options.message
      }

      await transporter.sendMail(message)

}

module.exports = sendEmail;