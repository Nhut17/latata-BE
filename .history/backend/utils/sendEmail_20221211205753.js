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

      const html = `
      <h3>Xin chào</h3>
      <p>Để đăng nhập vào Latata, username của bạn là: bichtram67</p>
      <p>Mã OTP của bạn : 011111</p>

  
      <p>Mọi chi tiết thắc mắc, vui lòng liên hệ với chúng tôi: <a href="mailto:latatashoping@gmail.com">latatashoping@gmail.com</a></p>
      `

      const message = {
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: 'tramnguyen672001@gmail.com',
        subject: options.subject,
        text: options.message,
        html: html
      }
      console.log(options.email)
      await transporter.sendMail(message)

}





module.exports = sendEmail;