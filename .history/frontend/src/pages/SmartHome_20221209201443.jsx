import React from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { SmartHomeContext } from '../context/smartHomeContext'
import { banner_block_product, menu_healthycare,menu_home} from '../components/data'
import MainSmartHome from '../components/SmartHome/MainSmartHome'
const SmartHome = () => {
    const context ={
        sliderTablet,
        bannerTablet,
        banner_block_product,
        menu_healthycare,
        menu_home
    }
  return (
    <div>
      <SmartHomeContext.Provider value={context}>
        <MainSmartHome/>
      </SmartHomeContext.Provider>
    </div>
  )
}

export default SmartHome
