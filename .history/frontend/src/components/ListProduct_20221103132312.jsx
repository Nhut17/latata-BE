import React from 'react'
import { list_product } from './data'
import Product from './Product'

const ListProduct = ({list_product,quantity}) => {
  return (
    <div className="list-product">
      {
        list_product?.map(val => (
          <Product data={val} />
        ))
      }
    </div>
  )
}

export default ListProduct
