import React, { useState } from 'react'
import '../../sass/Profile/profile.scss'
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
const MainProfile = ({currentUser}) => {

  const [avatar,setAvatar] = useState('')
  const [avatarPreview,setAvatarPreview] = useState('')

  const { register, handleSubmit} = useForm();

  const handleChangeProfile = (formData) => {

  }


  return (
    <div className='bg-profile'>
      <div className="container-profile">
        <div className="profile-avatar">
            <div className="avatar">
              <img src={currentUser?.avatar?.url} alt="" /> <br />
            </div>

            <div className="upload-avatar">
              <input type="file" name="" id="" />
            </div>
            
        </div>
        <div className="profile-content">
            <div className="profile-title">
                <h3>Hồ sơ của tôi</h3>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className="profile-detail">
                <form 
                      onSubmit={handleSubmit(handleChangeProfile)}
                      encType='multipart/form-data'
                     >
                    <span>Tên đăng nhâp</span>
                    <input {...register("username")} value={currentUser?.name} disabled />


                    {/* <span>Tên</span>
                    <input {...register("name")}/> */}

                    <span>Họ Tên</span>
                    <input {...register("email")} value={currentUser?.email}/>
                    <span>Email</span>
                    <input {...register("email")} value={currentUser?.email}/>

                    <span>Số điện thoại</span>
                    <input  {...register("phone")} value={currentUser?.phone}/>


                    
                    {/* <span>Mật khẩu hiện tại</span>
                    <input type="password" {...register("password")} />

                    <span>Mật khẩu mới</span>
                    <input type="password" {...register("new-password")} />

                    <span>Xác nhận mật khẩu</span>
                    <input type="password" {...register("comfirm-password")} /> */}

                   
                    {/* <input type='file' {...register("image")} value={data.email}/> */}
                    <button type='submit'>Lưu</button>
                </form>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainProfile
