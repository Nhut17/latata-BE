const nodemailer = require('nodemailer')
require('dotenv').config();

const sendVoucher = async options => {

    const { voucher,sales,createAt, expiredIn } = options

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
                    <h4 style="color: #000b49;">Kính chào quý khách hàng</h4>
                </div>
                
    
                <div class="order-detail">
                    <p>Lời trước tiên, LATATA xin gửi lời cảm ơn sâu sắc nhất đến ANH/CHỊ vì đã tin tưởng và sử dụng sản phẩm của chúng tôi trong thời gian qua. Đây là yếu tố quan trọng quyết định đến sự thành công và phát triển của LATATA.</p>
                    <p>Thay lời cảm ơn, LATATA xin phép gởi đến ANH/CHỊ voucher giảm giá ${sales}% cho tất cả các dịch vụ.</p>
                    <div class="summary">
                        <h3 style="color: black;">THÔNG TIN:</h3>
                        <p>Mã voucher : <b>${voucher}</b> </p>
                        <p>Thời hạn sử dụng : ${createAt} đến ${expiredIn}</p>
                     
                    </div>
                    
                </div>

                <p>TRÂN TRỌNG.</p>
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