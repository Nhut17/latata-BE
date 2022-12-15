import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
const RecommendToday = () => {

  const {listProduct} = useSelector(state => state.product)
  
  const [bestSeller,setBestSeller] = useState(listProduct.slice().sort((a,b) =>  b.promotion - a.promoion))

  return (
    <div className='recommend-today'>
        <h3>TOP DEAL</h3>
        
        <ListProduct quantity={10} />
    </div>
  )
}

export default RecommendToday
