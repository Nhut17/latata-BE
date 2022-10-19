import React from 'react'
import MainSub from '../components/SubComponents/MainSub'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { list_product } from '../components/data'

const Laptop = () => {
  return (
    <div className='laptop'>
      <MainSub  list_product={list_product}
                parentCate={'Laptop'}
                childCate={'Laptop'}
                sliders={sliderTablet}
                banners={bannerTablet} />
    </div>
  )
}

export default Laptop
