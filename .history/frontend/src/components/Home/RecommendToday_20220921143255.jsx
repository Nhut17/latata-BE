import React from 'react'
import ListProduct from '../ListProduct'
const RecommendToday = () => {
  return (
    <div className='recommend-today'>
        <h3>Gợi ý hôm nay</h3>
        
        <ListProduct quantity={10} />
    </div>
  )
}

export default RecommendToday
