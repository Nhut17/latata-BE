import React, { useEffect } from 'react'
import MainSub from '../components/SubComponents/MainSub'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/Product/productSlice'

const Laptop = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getProduct('637e405835fb3150c0128f53'))

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
