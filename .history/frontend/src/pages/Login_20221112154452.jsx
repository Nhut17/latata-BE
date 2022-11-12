import React, { useEffect } from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const success = useSelector(state => state.user.successLogin)
  const navigate = useNavigate()

  useEffect(() =>{
    if(success)
    {
      navigate('/')
      const nav = setTimeout(() => {
        toast(`Xin chào $Ơ`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      },1000)

      return () => {
        clearTimeout(nav)
      }
  
    }
  },[success])
  
  return (
    <div className='bg-login'>

        {
          success && <ToastContainer />
        }

      <HeaderLogin/>
      <LoginForm/>
    </div>
  )
}

export default Login



