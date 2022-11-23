import React from 'react'
import '../../sass/Profile/profile.scss'
import { useForm } from "react-hook-form";
const Profile = () => {
    const { register, handleSubmit} = useForm();
  return (
    <div className='bg-profile'>
      <div className="container-profile">
        <div className="profile-avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="" /> <br />
            <span>Username</span>
        </div>
        <div className="profile-content">
            <div className="profile-title">
                <h3>Hồ sơ của tôi</h3>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className="profile-detail">
                <form action="">
                    <span>Tên đăng nhâp</span>
                    <input {...register("username")} value='username' disabled />


                    <span>Tên</span>
                    <input {...register("name")}/>

                    <span>Email</span>
                    <input {...register("email")}/>

                    <span>Số điện thoại</span>
                    <input {...register("phone")}/>

                   
                    <input type='file' {...register("image")}/>
                    <button type='submit'>Lưu</button>
                </form>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
