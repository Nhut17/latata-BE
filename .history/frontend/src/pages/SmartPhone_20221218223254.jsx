import React, { useState ,useEffect} from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct, getProductCate, resetListCate } from '../redux/Product/productSlice'
import { useParams } from 'react-router-dom'

const SmartPhone = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { id} = useParams()
  console.log(listProductCate)
  
  useEffect(() => {

    dispatch(resetListCate())
    dispatch(getProductCate(id))

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
