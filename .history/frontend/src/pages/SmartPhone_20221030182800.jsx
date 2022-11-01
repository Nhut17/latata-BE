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
    getAPI()

  },[])

  const getAPI = async () => {
    const res = await axios.get('http://localhost:4000/api/v1/products')

    console.log("product: " + res.data)
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
