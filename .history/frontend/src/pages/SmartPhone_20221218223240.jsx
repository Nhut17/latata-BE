import React, { useState ,useEffect} from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct, getProductCate, resetListCate } from '../redux/Product/productSlice'

const SmartPhone = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { id} = use
  console.log(listProductCate)
  
  useEffect(() => {

    dispatch(resetListCate())
    dispatch(getProductCate('638219ff08b0e4ab8b016c9c'))

  },[])

  

  return (
    <div className='smart-phone' >
       
        <MainSub list_product={listProductCate}
                 parentCate={'Điện thoại'}
                 childCate={'điện thoại'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />

    </div>
  )
}

export default SmartPhone
