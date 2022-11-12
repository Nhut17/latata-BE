import React from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  
  return (
    <div className='bg-login'>
      <HeaderLogin/>
      <LoginForm/>
    </div>
  )
}

export default Login



