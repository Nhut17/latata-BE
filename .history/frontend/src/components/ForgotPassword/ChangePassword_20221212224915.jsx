
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import HeaderLogin from '../../components/Login/HeaderLogin'
import '../../sass/login/login.scss'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'

const ChangePassword = () => {
    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {
            // dispatch(loginUser(formData))
            // navigate('/')
    }
  return (
    <div className='bg-login'>

      
      {/* <HeaderLogin/> */}
      <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Nhập mật khẩu mới</span>

    
                    <div className="input-group">
                        <div className="input-password">
                        <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="password" 
                                    placeholder='Nhập mật khẩu mới'
                                    
                                     />
                          
                            

                        </div>
                        
                        <div className="input-password">
                        <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="password" 
                                    placeholder='Nhập lại mật khẩu'
                                    
                                     />
                          
                            

                        </div>

                        <div className="input-OTP">
                        <i class="fa-brands fa-codepen ic"></i>
                        <input 
                                type="text" 
                                placeholder='Nhập mã OTP'
                                
                                 />
                      
                        

                    </div>

                        {/* <Link to="/quen-mat-khau"><p><u>Quên mật khẩu</u></p></Link> */}
                    </div>
                   
                    
                   

                    
                    <Link to='/dang-nhap'><button className='btn-sign-up'>TIẾP TỤC</button></Link>
                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </div>
        </div> 
    </form>
    </div>
  )
}

export default ChangePassword
