import React from 'react'
import { useForm } from 'react-hook-form'
import login from '../../assets/images/login.png'
const LoginForm = () => {

    const { 
        register,
        handleSubmit,
        getValues ,
        formState: { errors }
    } = useForm()

  return (
    <form className='login-form'>
        <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Đăng Nhập</span>

    
                    <div className="input-group">
                        <div className="input-name">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Email'
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Địa chỉ email không đúng',
                                        }
                                    })}
                                     />
                            
                            {
                                errors.email?.type === 'required' && <span className='err-msg'>Mời bạn nhập email</span>
                            }
                            {
                                errors.email?.type === 'pattern' && <span className='err-msg'>{errors.email?.message}</span>
                            }

                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Mật Khẩu' />
                        </div>
                    </div>
                   
                    
                   

                    <button className='btn-sign-up'>ĐĂNG NHẬP</button>

                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </div>
        </div> 
    </form>
  )
}

export default LoginForm
