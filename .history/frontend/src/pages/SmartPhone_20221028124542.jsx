import React, { useState ,useEffect} from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'
import axios from 'axios'

const SmartPhone = () => {

  const [listProduct,setListProduct] = useState([])

  

  useEffect(() => {

  //  const res = await 




  },[])

  const getAPI = async () => {
    const res = await axios.get('/api/v1/products')

    console.log("product: " + res)
  }

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
