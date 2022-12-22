import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
import icon from '../../assets/images/add-to-basket.png'

const ListPhone = () => {

    const { listProduct} = useSelector(state => state.product)

    const [listPhone,setListPhone] = useState(listProduct.filter(val => val.category === 'Điện thoại'))

    const [listLaptop,setListLaptop] = useState(listProduct.filter(val => val.category === 'Điện thoại'))

    const listP = listPhon
 

    const listRecommand = [...listPhone, ...listLaptop] 

  return (
    <div className='list-phone'>

        <div className="title">
            <div className="img">
                <img src={icon} alt=""  />
            </div>
            <h3>GỢI Ý HÔM NAY</h3>
        </div>

        <ListProduct list_product={listRecommand}
        quantity={15}
                         />
    </div>
  )
}

export default ListPhone
