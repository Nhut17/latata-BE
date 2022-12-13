import React from 'react'
import '../../sass/Profile/profile.scss'
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import ChangePassword from './ChangePassword';
const MainProfile = ({currentUser}) => {
  const { register, handleSubmit} = useForm();

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
                <form action="">
                    <span>Tên đăng nhâp</span>
                    <input {...register("username")} value={currentUser?.name} disabled />


                    {/* <span>Tên</span>
                    <input {...register("name")}/> */}

                    <span>Email</span>
                    <input {...register("email")} value={currentUser?.email}/>

                    <span>Số điện thoại</span>
                    <input  {...register("phone")} value={currentUser?.phone}/>


                    
                    <ChangePassword/>

                   
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
