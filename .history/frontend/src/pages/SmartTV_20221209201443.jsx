import React from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'

const SmartTV = () => {
  return (
    <div className='smart-tv'>
        <MainSub list_product={list_product}
                 parentCate={'Tivi'}
                 childCate={'Tivi'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />
    </div>
  )
}

export default SmartTV 
