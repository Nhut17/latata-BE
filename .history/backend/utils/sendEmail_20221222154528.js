const nodemailer = require('nodemailer')
require('dotenv').config();

const sendEmail = async options => {

  console.log(1)

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure:false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    console.log(2)

      const html = `
    
      <p>Mã OTP: <b>${options.message}</b></p>
  
      <p>Mọi chi tiết thắc mắc, vui lòng liên hệ với chúng tôi: <a href="mailto:latatashoping@gmail.com">latatashoping@gmail.com</a></p>
      `

      const message = {
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: html
      }
      console.log(options.message)
      try{

        await transporter.sendMail(message)
      }
      catch(err){

        console.log(err)
      }

}





module.exports = sendEmail;