import React from 'react'
import login from '../../assets/images/login.png'
const LoginForm = () => {
  return (
    <div className='login-form'>
        <div className="container">
            <form action="">
                <div className="main-form">
                    <span className="sign-up">Đăng Nhập</span>

    
                    <div className="input-group">
                        <div className="input-name">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input type="text" placeholder='Tên của bạn'/>
                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input type="text" placeholder='Mật Khẩu' />
                        </div>
                    </div>
                   
                    
                   

                    <button className='btn-sign-up'>ĐĂNG NHẬP</button>

                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </form>
        </div> 
    </div>
  )
}

export default LoginForm
