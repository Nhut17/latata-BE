import React from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'

const Login = () => {
  return (
    <div className='bg-login'>
      <HeaderLogin/>
      <LoginForm/>
    </div>
  )
}

export default Login
