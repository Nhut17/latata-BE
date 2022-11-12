import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import login from '../../assets/images/login.png'
const LoginForm = () => {

    const dispatch = useDispatch()


    const { 
        register,
        handleSubmit,
        getValues ,
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {
            dispatch(get)
    }

  return (
    <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
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
                                    placeholder='Mật Khẩu'
                                    {...register('password',{
                                        required: true
                                    })} />
                                    {
                                     errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập password</span>
                                    }
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
