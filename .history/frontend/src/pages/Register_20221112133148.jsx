import React from 'react'
import logo from '../assets/images/logo.png'
import '../sass/Register/register.scss'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const success = useSelector

  return (
    <div className='register'>

        {
          
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

       <RegisterForm />

    </div>
  )
}

export default Register
