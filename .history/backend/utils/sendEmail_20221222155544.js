const nodemailer = require('nodemailer')
require('dotenv').config();

const sendEmail = async options => {


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

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
        console.log(11)
      }
      catch(err){
        console.log(10)
        console.log(err)
      }
    console.log(4)


}





module.exports = sendEmail;