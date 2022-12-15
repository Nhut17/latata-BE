import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
const RecommendToday = () => {

  const {listProduct} = useSelector(state => state.product)
  
  const [topDeal,setTopDeal] = useState(listProduct.slice().sort((a,b) =>  b.promotion - a.promotion))

  return (
    <div className='recommend-today'>
        <h3>TOP DEAL</h3>
        
        <ListProduct quantity={10
                      listProduct={top} } />
    </div>
  )
}

export default RecommendToday
