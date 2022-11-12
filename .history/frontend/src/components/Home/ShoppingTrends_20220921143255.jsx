import React from 'react'
import ListProduct from '../ListProduct'
import banner_trend_1 from '../../assets/images/home/banner_trend_1.png'
import banner_trend_2 from '../../assets/images/home/banner_trend_2.png'


const ShoppingTrends = () => {
  return (
    <div className='shopping-trends'>
        <div className="banner flex j-between">
            <img src={banner_trend_1} alt="" />
            <img src={banner_trend_2} alt="" />

        </div>
        <h3>Xu hướng mua sắm</h3>
        
        <ListProduct quantity={10} />
    </div>
  )
}

export default ShoppingTrends
