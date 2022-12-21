import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
import icon from '../'
const RecommendToday = () => {

  const {listProduct} = useSelector(state => state.product)
  
  const [topDeal,setTopDeal] = useState(listProduct.slice().sort((a,b) =>  b.promotion - a.promotion))

  // console.log(topDeal)

  // const listDeal = topDeal.filter(val => val.promotion >= 1)

  return (
    <div className='recommend-today'>
      <div className="title">

        <h3>TOP DEAL</h3>
      </div>
        
        <ListProduct quantity={10}
                    list_product={topDeal}  />
    </div>
  )
}

export default RecommendToday
