import React from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
import icon from '../../assets/images/add-to-basket.png'

const ListPhone = () => {

    const { listProduct} = useSelector(state => state.product)

    const listPhone = listProduct.filter(val => val.category === 'Điện thoại')

  return (
    <div className='list-phone'>

        <div className="title">
            <img src={icon} alt="" />
            <h2>GỢI Ý HÔM NAY</h2>
        </div>

        <ListProduct list_product={listPhone}
        quantity={10}
                         />
    </div>
  )
}

export default ListPhone
