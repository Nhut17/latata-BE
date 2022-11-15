import React from 'react'
import '../sass/productdetail/productdetail.scss'
import MainProductDetail from '../components/ProductDetail/MainProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProductDetail } from '../redux/Product/productSlice'

const ProductDetail = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.product.productDetail)
  const { id } = useParams()
  consolelog()
  useEffect(() => {
    dispatch(getProductDetail(id))
  },[])

  return (
   <div className="main-product-detail">
      <MainProductDetail data={data}/>
   </div>
  )
}

export default ProductDetail
