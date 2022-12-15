const nodemailer = require('nodemailer')
require('dotenv').config();

const sendOrder = async options => {

    const { order}

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
      <div class="logo">
          <img src="https://res.cloudinary.com/dx8xengfd/image/upload/v1670955574/avatars/logo_color_upyntn.png" alt="">
          <h1>Thanks for your order</h1>
      </div>
      <div>
          <button>XEM HÓA ĐƠN</button>
  
      </div>
  
      <div class="order-detail">
          <div class="summary">
              <h3>THÔNG TIN</h3>
              <p>Mã đơn hàng : </p>
              <p>Ngày đặt hàng : </p>
              <p>Tổng hóa đơn : </p>
          </div>
          <div class="address">
              <h3>ĐỊA CHỈ</h3>
              <p>Long An</p>
          </div>
      </div>
  
      <div class="list-order">
          <table>
              <tr>
                  <th>ĐƠN HÀNG</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
              </tr>
              <tr>
                  <td>
                      <div class="img">
                          <img src="" alt="">
                      </div>
                      <p>Tên sản phẩm</p>
                  </td>
  
                  <td>1</td>
  
                  <td>price</td>
              </tr>
          </table>
      </div>
  
  `

      const message = {
        from: '"LATATA Shop" <quynhnhutg6@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: html
      }
      await transporter.sendMail(message)

}





module.exports = sendOrder;