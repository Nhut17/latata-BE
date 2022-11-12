import React from 'react'
import logo from '../../assets/images/logo_color.png'
const HeaderLogin = () => {
  return (
    <div className='header-login'>
      <div className="container flex a-center">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>Đăng nhập</p>

      </div>
    </div>
  )
}

export default HeaderLogin
