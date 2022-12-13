
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import HeaderLogin from '../../components/Login/HeaderLogin'
import '../../sass/login/login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { forgotPassword, resetActionUser, resetPassword } from '../../redux/User/userSlice';

const ChangePassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    const { successResetPassword, errorResetPassword , message,emailOtp,successSendOTP} = useSelector(state => state.user)

    // reset actions user
    useEffect(() => {
        dispatch(resetActionUser())
    })

    //  otp expired or wrong
    useEffect(() => {
        if(errorResetPassword){
            dispatch(forgotPassword(emailOtp))
        }

    },[errorResetPassword])

    //  send again otp  success
    useEffect(() => {
        if(successSendOTP){
            toast('Gửi lại otp thành công', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    },[successSendOTP])

    // reset password successful
   useEffect(() => {
        if(successResetPassword)
        {
            toast('Đổi mật khẩu mới thành công!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            const time = setTimeout(() => {
                navigate('/')
            },2000)

            return () => {
                clearTimeout(time)
            }
        }
   },[successResetPassword])


    // handle reset password
    const onHandleSubmit = (formData) => {

        const { otp, password, rePasword } = formData
        const data = {
            otp: otp,
            password: password,
            confirmPassword: rePasword
        }

        dispatch(resetPassword(data))
           
    }
  return (
    <div className='bg-login'>

      
      {/* <HeaderLogin/> */}
      <form className='login-form' onSubmit={handleSubmit(onHandleSubmit)}>
      <ToastContainer />

      <div className="container">
            <div className='form'>
                <div className="main-form">
                    <span className="sign-up">Nhập mật khẩu mới</span>

    
                    <div className="input-group">
                    <div className="input-password">
                    <i class="fa-solid fa-lock ic"></i>
                    <input 
                            type="password" 
                            placeholder='Mật Khẩu'
                            {...register('password',{
                                required: true,
                                minLength: 7
                            })} />
                             {
                                errors.password?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                                }
                                {
                                errors.password?.type === 'minLength' &&  <span className='err-msg'>Mật khẩu có ít nhất 7 kí tự</span>
                                }
                </div>
                <div className="input-repeat-password">
                    <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                    <input 
                            type="password" 
                            placeholder='Nhập Lại Mật Khẩu'
                            {...register('rePassword', {
                                required: true,
                                validate: (value) => {
                                    const password = getValues('password')
                                    if(password !== value)
                                    {
                                        return 'Nhập lại mật khẩu không đúng!'
                                    }
                                }
                            })}/>
                             {
                                errors.rePasword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập lại mật khẩu</span>
                            }
                             {
                                errors.rePasword?.type === 'pattern' &&  <span className='err-msg'>{errors.rePasword.message}</span>
                            }
                </div>

                        <div className="input-OTP">
                        <i class="fa-brands fa-codepen ic"></i>
                        <input 
                                type="text" 
                                placeholder='Nhập mã OTP'
                                {...register('otp',{
                                    required: true
                                })}
                                 />
                                 {
                                    errors.otp?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mã OTP</span>
                                }
                        

                        </div>

                    </div>
                       
                  <button className='btn-sign-up'>TIẾP TỤC</button>
                  {
                    errorResetPassword && <button className='btn-sign-up'style={{marginLeft: 40}} >Gửi lại mã</button>
                  }
                  
                  {
                    errorResetPassword && <span className='err-msg'>{message}</span>
                  }
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
