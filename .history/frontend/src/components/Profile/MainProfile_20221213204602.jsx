import React, { useState } from 'react'
import '../../sass/Profile/profile.scss'
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
const MainProfile = ({currentUser}) => {

  const [avatar,setAvatar] = useState('')
  const [avatarPreview,setAvatarPreview] = useState('')

  const dispatch = useDispatch()

  const { register, handleSubmit} = useForm();

  const handleAvatar = (e) =>{

  }

  const handleChangeProfile = (formData) => {
      const{
        name,
        email,
        phone
      } = formData;

      const dataS= new FormData()
      dataS.set('name', name)
      dataS.set('email', email)
      dataS.set('phone', phone)
      dataS.set('avatar', avatar)
    
  }


  return (
    <div className='bg-profile'>
      <div className="container-profile">
        <div className="profile-avatar">
            <div className="avatar">
              <img src={currentUser?.avatar?.url} alt="" /> <br />
            </div>

            <div className="upload-avatar">
              <input 
                type="file"
                {...register("images")}
                onChange={handleImage}
                accept="images/*" />
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
                    <input {...register("username")} value={currentUser?.username} disabled />


                    {/* <span>Tên</span>
                    <input {...register("name")}/> */}

                    <span>Họ Tên</span>
                    <input {...register("name")} defaultValue={currentUser?.name}/>
                    <span>Email</span>
                    <input {...register("email")} defaultValue={currentUser?.email}/>

                    <span>Số điện thoại</span>
                    <input  {...register("phone")} defaultValue={currentUser?.phone}/>


                    
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
