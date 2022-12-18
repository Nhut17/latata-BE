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
  const { id} = useParams()
  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('63821a5708b0e4ab8b016cc3'))
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
