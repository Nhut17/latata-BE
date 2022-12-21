import React from 'react'
import bannerWatch from '../../assets/images/home/banner-watch.webp'
import bannerIpad from '../../assets/images/home/banner-ipad.webp'
import bannerTv from '../../assets/images/home/banner-tv.webp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const MenuOptions = () => {

  const { listCate } = useSelector(state => state.category)

  const watch = listCate.filter(val => val.name === 'Smartwatch')
  const ipad = listCate.filter(val => val.name === 'Tablet')
  const tivi = listCate.filter(val => val.name === 'Tivi')
  console.log(watch)

  return (
    <div className='menu-options'>
      
      <Link className='option' to={`/${watch[0].name}/${watch[0]._id}}`} reloadDocument>
            <img src={bannerWatch} alt="" />
            <span className='title-watches'>SMART WATCHES</span>
      </Link>


        <div className="option">
          <Link className='option' to={`/${pad[0].name}/${pad[0]._id}}`}>
            <img src={bannerIpad} alt="" />
            <span className='title-watches'>IPAD & IPAD AIR</span>
          </Link>
        </div>
        <div className="option">
            <img src={bannerTv} alt="" />
            <span className='title-watches'>TV & VIDEO</span>
        </div>
    </div>
  )
}

export default MenuOptions
