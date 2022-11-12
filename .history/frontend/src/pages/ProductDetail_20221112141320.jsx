import React from 'react'
import '../sass/productdetail/productdetail.scss'
import MainProductDetail from '../components/ProductDetail/MainProductDetail'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const data = useSelector(state => state.product.productDetail)
  const { id } = useParams()

  return (
   <div className="main-product-detail">
      <MainProductDetail data={data}/>
   </div>
  )
}

export default ProductDetail
