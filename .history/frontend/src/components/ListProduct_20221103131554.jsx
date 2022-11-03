import React from 'react'
import { list_product } from './data'
import Product from './Product'

const ListProduct = ({quantity}) => {
  return (
    <div className="list-product">
      {
        list_product?.slice(0,quantity).map(val => (
          <Product data={val} />
        ))
      }
    </div>
  )
}

export default ListProduct
