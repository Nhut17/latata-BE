import React from 'react'
import ItemCart from './ItemCart'
import { list_product } from '../data'

const ListingCart = ({listCart}) => {
  return (
    <div className='listing-cart'>
        {
            listCart.products.map(data => (
                <ItemCart data={data} />
            ))
        }
   
      
      <div className="total-price">
        <span>Tạm tính ({listCart}): </span>
        <span className="total">1000000đ</span>
      </div>
    

    </div>
  )
}

export default ListingCart
