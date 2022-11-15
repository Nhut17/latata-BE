import React from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


  const success = useSelector(state => state.user.successRegister)
  const navigate = useNavigate()

  useEffect(() =>{
    if(success)
    {
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

      const nav = setTimeout(() => {
        navigate('/')
        navigate(0)
      },2000)

      return () => {
        clearTimeout(nav)
      }
  
    }
  },[success])
  
  return (
    <div className='bg-login'>
      <HeaderLogin/>
      <LoginForm/>
    </div>
  )
}

export default Login



