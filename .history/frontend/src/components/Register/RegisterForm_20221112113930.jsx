import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getUser, registerUser, loginUser } from '../../redux/User/userSlice';
const RegisterForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state.user)

    const {
        register,
        handleSubmit,
        getValues    ,
        formState: { errors }
     } = useForm()

    

     const onHandleSubmit = (formData) => {
        console.log('data form'+ JSON.stringify(formData))
        dispatch(registerUser({
            username: "qnhut19",
            name: "Quỳnh Nhựt",
            email: "qnhut19@gmail.com",
            phone: "0375263489",
            password: "qnhut19"
        }))
        // dispatch(loginUser({
        //     email: "qnhut18@gmail.com",
        //     password: "qnhut18"
        // }))
        
     }

  return (
    <form className='main' onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="container">
                <div className='form'>
                   <div className="main-form">
                     <span className="sign-up">Đăng Ký</span>

                        <div className="input-group">
                        <div className="input-username">
                            <i class="fa-solid fa-user ic"></i>
                            <input type="text" 
                                    placeholder='Tên Người Dùng'
                                    {...register('username',{
                                        required: true
                                    })}   />
                            {
                                errors.username?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập username</span>
                            }
                        </div>
                        <div className="input-name">
                            <i class="fa-solid fa-user ic"></i>
                            <input type="text" 
                                    placeholder='Họ Tên'
                                    {...register('name',{
                                        required: true
                                    })}   />
                            {
                                errors.name?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập họ tên</span>
                            }
                        </div>           
                        <div className="input-email">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Email'
                                    {...register('email',{
                                        required:true,
                                        pattern: {
                                            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Địa chỉ email không đúng',
                                        }
                                    })} />
                                      {
                                        errors.email?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập email</span>
                                        }
                                      {
                                        errors.email?.type === 'pattern' &&  <span className='err-msg'>{errors.email?.message}</span>
                                        }
                        </div>
                        <div className="input-phone">
                            <i class="fa-solid fa-phone ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Số Điện Thoại'
                                    {...register('phone',{
                                        required: true
                                    }) }/>
                                     {
                                        errors.phone?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập số điện thoại</span>
                                        }
                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input 
                                    type="password" 
                                    placeholder='Mật Khẩu'
                                    {...register('password',{
                                        required: true
                                    })} />
                                     {
                                        errors.password?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                                        }
                        </div>
                        <div className="input-repeat-password">
                            <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                            <input 
                                    type="password" 
                                    placeholder='Nhập Lại Mật Khẩu'
                                    {...register('password', {
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
                                        errors.password?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập lại mật khẩu</span>
                                        }
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
                </div>
            </div>
    </form>
  )
}

export default RegisterForm
