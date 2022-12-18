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
  const {id} = useParams
  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('63821a0d08b0e4ab8b016ca2'))
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
