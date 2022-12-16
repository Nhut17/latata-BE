import React from 'react'
import {sliderTablet,bannerTablet} from '../components/Tablet/dataTablet.js'
import '../sass/Tablet/Tablet.scss'
import '../sass/Home/Home.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useSelector } from 'react-redux'

const Tablet = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProduct('637e405835fb3150c0128f53'))
  },[])

  return (
    <div className='tablet bd-bottom'>
       
          <MainSub list_product={list_product}
                  parentCate={'Tablet'}
                  childCate={'Tablet'}
                  sliders={sliderTablet}
                  banners={bannerTablet} />
        
    </div>
  )
}

export default Tablet
