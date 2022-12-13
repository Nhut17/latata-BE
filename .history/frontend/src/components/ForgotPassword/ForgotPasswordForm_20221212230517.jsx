import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import login from '../../assets/images/login.png'
import { loginUser } from '../../redux/User/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {
           
        // toast('Đăng ký thành công', {
        //     position: "top-right",
        //     autoClose: 1000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: false,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
    }

  return (
    <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Quên mật khẩu</span>

    
                    <div className="input-group">
                        <span className='instructions'>Nhập địa chỉ email của bạn và chúng tôi sẽ <br/> gửi cho bạn hướng dẫn để đặt lại mật khẩu của bạn.</span>
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


  
                    </div>
                   
                    
                   

                    
                    <button className='btn-sign-up'>TIẾP TỤC</button>
                </div>
                <div className="img">
                    <img src={login} alt="" />
                    </div>
                
            </div>
        </div> 
    </form>
  )
}

export default ForgotPasswordForm
