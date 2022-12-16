import React, { useEffect } from 'react'
import {sliderTablet,bannerTablet} from '../components/Tablet/dataTablet.js'
import '../sass/Tablet/Tablet.scss'
import '../sass/Home/Home.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../redux/Product/productSlice.js'

const Tablet = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('639b27d83ed8e52a21b6f214'))
  },[])

  return (
    <div className='tablet bd-bottom'>
       
          <MainSub list_product={listProductCate}
                  parentCate={'Tablet'}
                  childCate={'Tablet'}
                  sliders={sliderTablet}
                  banners={bannerTablet} />
        
    </div>
  )
}

export default Tablet
