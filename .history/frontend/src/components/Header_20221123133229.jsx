import '../sass/header/header.scss'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'
import { Link, useNavigate } from 'react-router-dom'
import {categories} from './data'
import { useDispatch, useSelector } from 'react-redux'
  
const Header = () => {

  const user = useSelector(state => state.user.user)
  const success = useSelector(state => state.user.successLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
      localStorage.clear()
      // dispatch(logout())
      navigate('/')
      navigate(0)
  }

  return (
    <header>
      <div className="container">
        <div className="top-header">
          {
            user ? 
            <>
            <p className="success-login"><span>Xin chào {user?.name}</span></p> 
            <p className="success-login" onClick={handleLogout}><span>Đăng xuất</span></p> 
            </>
            : (
              <p
              className='login'>
                <Link to='/dang-nhap'>
                  <span>Đăng nhập</span>&nbsp;
                  <span>|</span>
                  &nbsp;
                </Link>
              <Link to='/dang-ky'>
                <span>Đăng ký</span>
              </Link>
            </p>
            )
          }
         
        
        </div>
        <div className="main-header flex j-between a-center">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="latata" />
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder='Bạn tìm gì...' />
          </div>

          <div className="cart">
            <Link to='/cart'>
              <img src= {cart} alt="" />
            </Link>
          </div>
        </div>

        <div className="header-content">
            <div className="list-categories flex j-between">
                {categories.map(item => (
                  <div className="item pointer" key={item.id}>
                   
                    <Link to={`/${item.link}`}>
                      
                        <img src={item.icon} alt="" />
                        
                        <span>{item.content}</span>
                     
                    </Link>
                    
                  </div>

                ))}

                  
                
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header

