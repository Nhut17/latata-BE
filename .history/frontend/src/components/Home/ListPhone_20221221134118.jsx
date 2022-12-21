import React from 'react'
import ListProduct from '../ListProduct'

const ListPhone = () => {

    const { listProduct} = useSelector(state => state.product)

  return (
    <div className='list-phone'>
        {/* <ListProduct list_product={} /> */}
    </div>
  )
}

export default ListPhone
