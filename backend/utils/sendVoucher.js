const nodemailer = require('nodemailer')
require('dotenv').config();

const sendVoucher = async options => {

    const { voucher } = options

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
        <html>
            <body>
                <div class="logo">
                    <img src="https://res.cloudinary.com/dx8xengfd/image/upload/v1670955574/avatars/logo_color_upyntn.png" alt="">
                    <h1 style="color: #000b49;">Thanks for your order</h1>
                </div>
                
    
                <div class="order-detail">
                    <div class="summary">
                        <h3 style="color: black;">THÔNG TIN</h3>
                        <p>Mã voucher : #${voucher} </p>
                     
                    </div>
                    
                </div>
            </body>

            
        </html>
  
  `

      const message = {
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: html
      }
      await transporter.sendMail(message)
    

}





module.exports = sendVoucher;