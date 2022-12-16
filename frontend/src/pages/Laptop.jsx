import React, { useEffect } from 'react'
import MainSub from '../components/SubComponents/MainSub'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getProductCate, resetListCate } from '../redux/Product/productSlice'

const Laptop = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('63821a0708b0e4ab8b016c9f'))
  },[])

  return (
    <div className='laptop'>
      <MainSub  list_product={listProductCate}
                parentCate={'Laptop'}
                childCate={'Laptop'}
                sliders={sliderTablet}
                banners={bannerTablet} />
    </div>
  )
}

export default Laptop
