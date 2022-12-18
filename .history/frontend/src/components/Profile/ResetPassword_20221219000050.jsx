import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../sass/Profile/profile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const {   register,
        handleSubmit,
        getValues    ,
        formState: { errors }} = useForm();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {successUpdatePassword, errorUpdatePassword} = useSelector(state => state.user)


    useEffect(() => {
        if(successUpdatePassword)
         {
 
         toast('Thay đổi mật khẩuthành công', {
             position: "top-right",
             autoClose: 500,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: true,
             progress: undefined,
             theme: "light",
             });
 
         const timer = setTimeout(() =>{
             navigate('/profile')
         },1500)
 
         return () => {
             clearTimeout(timer)
         }
 
         }
 
     },[successUpdatePassword])

    const onHandleSubmit = (formData) => {
        dispatch(formData)
    }

    return (
        
        <div className="bg-profile">
            <div className="container-profile">
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                <div className="reset-pass">
                    <h3>ĐỔI MẬT KHẨU</h3>
                    <div className="input-group">
                        <span>Mật khẩu hiện tại</span>
                        <input type="password" 
                                {...register("oldPassword",{
                                    required: true
                                })} />
                                {
                                errors.oldPassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập họ tên</span>
                            }
                    </div>

                    <div className="input-group">
                        <span>Mật khẩu mới</span>
                        <input type="password" 
                                {...register("password",{
                                    required: true
                                })} />
                                  {
                                errors.oldPassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập họ tên</span>
                            }
                    </div>

                    <div className="input-group">
                        <span>Xác nhận mật khẩu</span>
                        <input type="password" 
                                {...register("comfirm-password",{
                                    required: true
                                })} />
                                  {
                                errors.oldPassword?.type === 'required' &&  <span className='err-msg'>Mời bạn nhập họ tên</span>
                            }
                    </div>

                    <button type='submit'>Lưu</button>
                </div>
                </form>
            </div>
        </div>
      
            
        
    )
}

export default ResetPassword