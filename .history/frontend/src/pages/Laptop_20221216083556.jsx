import React, { useEffect } from 'react'
import MainSub from '../components/SubComponents/MainSub'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import { list_product } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/Product/productSlice'

const Laptop = () => {

  const {} = useSelector(state => state.product)
  const dispatch = useDispatch()

  
  useEffect(() => {

    dispatch(getProduct())

  },[])
  return (
    <div className='laptop'>
      <MainSub  list_product={state.listProduct}
                parentCate={'Laptop'}
                childCate={'Laptop'}
                sliders={sliderTablet}
                banners={bannerTablet} />
    </div>
  )
}

export default Laptop
