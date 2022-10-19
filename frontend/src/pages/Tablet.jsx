import React from 'react'
import {sliderTablet,bannerTablet} from '../components/Tablet/dataTablet.js'
import '../sass/Tablet/Tablet.scss'
import '../sass/Home/Home.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'

const Tablet = () => {
  return (
    <div className='tablet bd-bottom'>
        <div className="container">
          <MainSub list_product={list_product}
                  parentCate={'Tablet'}
                  childCate={'Tablet'}
                  sliders={sliderTablet}
                  banners={bannerTablet} />
        </div>
    </div>
  )
}

export default Tablet
