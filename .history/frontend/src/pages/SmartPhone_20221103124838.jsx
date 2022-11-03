import React, { useState ,useEffect} from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct } from '../redux/Product/productSlice'

const SmartPhone = () => {

  const state = useSelector(state => state.product)
  const dispatch = useDispatch()

  
  useEffect(() => {

    getProduct()
    dispatch( )

  },[])

  

  return (
    <div className='smart-phone' >
       
        <MainSub list_product={list_product}
                 parentCate={'Điện thoại'}
                 childCate={'điện thoại'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />

    </div>
  )
}

export default SmartPhone
