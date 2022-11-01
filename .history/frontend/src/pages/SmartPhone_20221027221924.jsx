import React, { useState ,useEffect} from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'

const SmartPhone = () => {

  const [listProduct,setListProduct] = useState([])

  useEffect(() => {

    fetch("http://localhost:4000/api/v1/products?page=1")
      .then(res => res(json)


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
