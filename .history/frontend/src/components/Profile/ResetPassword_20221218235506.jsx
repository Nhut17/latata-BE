import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import '../../sass/Profile/profile.scss'
const ResetPassword = () => {
    const { register, handleSubmit} = useForm();

    const {successUpdatePassword, errorUpdatePassword} = useSelector(state => state.user)


    return (
        
        <div className="bg-profile">
            <div className="container-profile">
                <form action=""></form>
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
            </div>
        </div>
      
            
        
    )
}

export default ResetPassword