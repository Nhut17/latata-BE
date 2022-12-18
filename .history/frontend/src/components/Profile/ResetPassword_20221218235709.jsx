import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../sass/Profile/profile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const { register, handleSubmit} = useForm();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {successUpdatePassword, errorUpdatePassword} = useSelector(state => state.user)


    useEffect(() => {
        if(successUpdatePassword)
         {
 
         toast('Đăng ký thành công', {
             position: "top-right",
             autoClose: 1000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: true,
             progress: undefined,
             theme: "light",
             });
 
         const succ = setTimeout(() =>{
             navigate('/')
             navigate(0)
         },2000)
 
         return () => {
             clearTimeout(succ)
         }
 
         }
 
     },[successUpdatePassword])

    const onHandleSubmit = (formData) => {

    }

    return (
        
        <div className="bg-profile">
            <div className="container-profile">
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                <div className="reset-pass">
                    <h3>ĐỔI MẬT KHẨU</h3>
                    <div className="input-group">
                        <span>Mật khẩu hiện tại</span>
                        <input type="password" {...register("oldPassword")} />
                    </div>

                    <div className="input-group">
                        <span>Mật khẩu mới</span>
                        <input type="password" {...register("password")} />
                    </div>

                    <div className="input-group">
                        <span>Xác nhận mật khẩu</span>
                        <input type="password" {...register("comfirm-password")} />
                    </div>

                    <button type='submit'>Lưu</button>
                </div>
                </form>
            </div>
        </div>
      
            
        
    )
}

export default ResetPassword