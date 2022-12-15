import React from 'react'
import ListProduct from '../ListProduct'
const RecommendToday = () => {



  return (
    <div className='recommend-today'>
        <h3>TOP DEAL</h3>
        
        <ListProduct quantity={10} />
    </div>
  )
}

export default RecommendToday
