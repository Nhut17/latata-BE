import React from 'react'
import Banner from '../../components/Home/Banner'
import banner from '../../assets/images/smartWatch/banner_smartWatch.png'
import MenuTopFixed from './MenuTopFixed'
import ListBlockSmartWatch from './ListBlockSmartWatch' 


const MainSmartWatch = () => {
  return (
    <div className='main-smart-watch'>

        <Banner banner={banner} />

        <MenuTopFixed />

        <div className="container">


        <ListBlockSmartWatch />

        </div>
    </div>
  )
}

export default MainSmartWatch