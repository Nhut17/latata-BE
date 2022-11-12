import React from 'react'
import logo from '../assets/images/logo.png'
import '../sass/Register/register.scss'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Register = () => {

  const success = useSelector(state => state.user.successRegister)

  useEffect(() =>{
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
  },[success])

  const activeToast = () => {
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
  }

  return (
    <div className='register'>

        {
          success && <ToastContainer />
        }

        <div className="header-signUp">
           <div className="container">
           <div className="logo">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            </div>
            <span>ĐĂNG KÝ</span>
           </div>
        </div>

       <RegisterForm activeToast={activeToast} />

    </div>
  )
}

export default Register
