import React from 'react'
import logo from '../assets/images/logo.png'
import '../sass/Register/register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      
        <div className="header-signUp">
           <div className="container">
           <div className="logo">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            </div>
            <span>ĐĂNG KÝ</span>
           </div>
        </div>

        <div className="main">
            <div className="container">
                <form action="">
                   <div className="main-form">
                     <span className="sign-up">Đăng Ký</span>

                        <div className="input-group">
                        <div className="input-username">
                            <i class="fa-solid fa-user ic"></i>
                            <input type="text" placeholder='Tên Người Dùng'/>
                        </div>
                        <div className="input-phone">
                            <i class="fa-solid fa-phone ic"></i>
                            <input type="text" placeholder='Số Điện Thoại' />
                        </div>
                        <div className="input-email">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input type="text" placeholder='Mật Khẩu' />
                        </div>
                        <div className="input-repeat-password">
                            <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                            <input type="text" placeholder='Nhập Lại Mật Khẩu' />
                        </div>
                        </div>

                        <div className="policy">
                            <input type="checkbox" />
                            <span>Tôi đồng ý với <u>Dịch vụ chính sách</u> </span>
                        </div>

                        <button className='btn-sign-up'>ĐĂNG KÝ</button>

                   </div>
                   <div className="img">
                    <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
                   </div>
                </form>
            </div>
        </div>    

    </div>
  )
}

export default Register
