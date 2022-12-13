import '../sass/header/header.scss'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'
import { Link, useNavigate , NavLink} from 'react-router-dom'
import {categories} from './data'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/User/userSlice'
import SearchProduct from './Home/SearchProduct'

const Header = () => {

  const [search, setSearch] = useState('')

  const {curruseStatentUser} = useSelector(state => state.user)
  const {listCartUser } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('curent'+ JSON.stringify(currentUser))

  const handleLogout = () => {
    dispatch(logoutUser())
      localStorage.clear()
      navigate('/')
      navigate(0)
  }

  return (
    <header>
      <div className="container">
        <div className="top-header">
          {
            currentUser ? 
            <>

            <Link>
            <div className="profile">
              <div className="login-complete">
                <div className="avatar">

                    <img src={currentUser?.user.avatar?.url} alt="" />

                   

                  </div>
                  <p className="success-login" ><span>{currentUser?.user.name}</span></p> 
                </div>    

                <div className="dropdown-profile">
                  <ul>
                    <Link to='/profile'><li>Thông tin cá nhân</li></Link>
                    <Link to='/myOrder'><li>Lịch sử mua hàng</li></Link>           
                    <li onClick={handleLogout}>Đăng xuất</li>
                  </ul>  
                </div>  
            </div>      
            </Link>

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
          <div className="group-search">
            <input type="text" placeholder='Bạn tìm gì...' />
          </div>

          <div className="cart">
            <Link to='/cart'>
              <img src= {cart} alt="" />
            </Link>
            <span>{
              listCartUser ? listCartUser.products.length : 0
            }</span>
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

