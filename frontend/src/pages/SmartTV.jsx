import React, { useEffect } from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../redux/Product/productSlice'

const SmartTV = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('639b27fc3ed8e52a21b6f220'))
  },[])


  return (
    <div className='smart-tv'>
        <MainSub list_product={listProductCate}
                 parentCate={'Tivi'}
                 childCate={'Tivi'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />
    </div>
  )
}

export default SmartTV 
