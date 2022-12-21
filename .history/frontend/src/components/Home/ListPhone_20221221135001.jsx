import React from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'

const ListPhone = () => {

    const { listProduct} = useSelector(state => state.product)

    const listPhone = listProduct.filter(val => val.category === 'Điện thoại')

  return (
    <div className='list-phone'>

        <div className="title">
            h
        </div>

        <ListProduct list_product={listPhone}
        quantity={10}
                         />
    </div>
  )
}

export default ListPhone
