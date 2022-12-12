
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import HeaderLogin from '../../components/Login/HeaderLogin'
import '../../sass/login/login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'

const ChangePassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {
        console.log(formData)
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
