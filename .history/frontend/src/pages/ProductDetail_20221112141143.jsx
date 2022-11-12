import React from 'react'
import '../sass/productdetail/productdetail.scss'
import MainProductDetail from '../components/ProductDetail/MainProductDetail'

const ProductDetail = () => {
  return (
   <div className="main-product-detail">
      <MainProductDetail data={data}/>
   </div>
  )
}

export default ProductDetail
