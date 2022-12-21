import React from 'react'
import bannerWatch from '../../assets/images/home/banner-watch.webp'
import bannerIpad from '../../assets/images/home/banner-ipad.webp'
import bannerTv from '../../assets/images/home/banner-tv.webp'
import { useSelector } from 'react-redux'


const MenuOptions = () => {

  const { listCate } = useSelector(state => state.category)

  const watch = listCate.filter(val => val.name === 'Smartwatch')

  return (
    <div className='menu-options'>

        <div className="option">
            <img src={bannerWatch} alt="" />
            <span className='title-watches'>SMART WATCHES</span>
        </div>
        <div className="option">
            <img src={bannerIpad} alt="" />
            <span className='title-watches'>IPAD & IPAD AIR</span>
        </div>
        <div className="option">
            <img src={bannerTv} alt="" />
            <span className='title-watches'>TV & VIDEO</span>
        </div>
    </div>
  )
}

export default MenuOptions
