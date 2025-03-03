import React, { useEffect } from 'react'
import '../sass/Home/Home.scss'
import BigBanner from '../components/Home/BigBanner'
import FlashSale from '../components/Home/FlashSale'
import OptionPromote from '../components/Home/OptionPromote'
import Banner from '../components/Home/Banner'
import banner_opt from '../assets/images/home/banner_opt.png'

import ShoppingTrends from '../components/Home/ShoppingTrends'
import GreatDeals from '../components/Home/GreatDeals'
import RecommendToday from '../components/Home/RecommendToday'
import Tech24h from '../components/Home/Tech24h'

import MenuOptions from '../components/Home/MenuOptions'
import ListWatchesSeries from '../components/Home/ListWatchesSeries'
import bannerGalaxy from '../assets/images/home/banner_galaxy.png'
import jwt_decode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getProduct } from '../redux/Product/productSlice'


const Home = () => {
  const navigate = useNavigate()
  const success = useSelector(state => state.user.successLogin)
  const {user , currentUser} = useSelector(state => state.user)
  const axiosJWT = axios.create()
  const dispatch = useDispatch()

  const refreshToken = async() => {
    try{
      const res = await axios.post('/api/v1/refresh-token',{
        withCredentials: true,
      })
      return res.data
    }
    catch(e){
      console.log(e)
    }
  }

  axiosJWT.interceptors.request.use(
    async(config) => {
      const date = new Date()
      const decodeToken = jwt_decode(currentUser.accessToken)
      if(decodeToken.exp <  date.getTime() / 1000)
      {
        const data = await refreshToken()
        const refreshUser = {
          ...currentUser,
          token: data.accessToken 
        };
        config.headers['token'] = "Bearer " + data.accessToken
      }
       return config
    },
    (err) => {
      return Promise.reject(err);
    }
  )


    useEffect(() => {
        dispatch(getProduct(axiosJWT))
    },[])


  // useEffect(() =>{
  //   if(success)
  //   {
  //       toast(`Xin chào ${user?.name}`, {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         });
  //   }
  // },[success])

  useEffect(() => {
    if(!currentUser.user){
      navigate('/')
    }
   
    if(currentUser.user?.role === 'admin'){
        navigate('/admin')
      }
    if(currentUser.user?.role === 'user'){
      navigate('/')
    }

  },[])

  return (
    <div className="home">
      
        

      <div className="big-banner">
        <BigBanner />
      </div>

      <div className="container">
        <div className="banner-home">

          <Banner banner={banner_opt} />
        </div>
        <OptionPromote />
        
        <FlashSale />


        <ShoppingTrends/>
        
        

        <MenuOptions />
        <ListWatchesSeries />
        <div className="banner-galaxy">
          <Banner banner={bannerGalaxy} />
        </div>
        <GreatDeals/>
        <RecommendToday/>
        <Tech24h/>
      </div>


    </div>
  )
}

export default Home
