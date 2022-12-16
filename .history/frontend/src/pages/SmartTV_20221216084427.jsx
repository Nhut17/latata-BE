import React from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import { useSelector } from 'react-redux'

const SmartTV = () => {

  const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate('639b27d83ed8e52a21b6f214'))
  },[])


  return (
    <div className='smart-tv'>
        <MainSub list_product={list_product}
                 parentCate={'Tivi'}
                 childCate={'Tivi'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />
    </div>
  )
}

export default SmartTV 
