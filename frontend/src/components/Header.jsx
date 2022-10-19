
import '../sass/header/header.scss'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'
import { Link } from 'react-router-dom'
import {categories} from './data'

  


const Header = () => {


  return (
    <header>
      <div className="container">
        <div className="top-header">
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

