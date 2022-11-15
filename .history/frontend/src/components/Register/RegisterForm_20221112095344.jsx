import React from 'react'
import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()

     const onHandleSubmit = () => {

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
                                    type="email" 
                                    placeholder='Email'
                                    {...register('email')} />
                        </div>
                        <div className="input-phone">
                            <i class="fa-solid fa-phone ic"></i>
                            <input 
                                    type="text" 
                                    placeholder='Số Điện Thoại'
                                    {...register('phone')} />
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
                </div>
            </div>
    </form>
  )
}

export default RegisterForm
