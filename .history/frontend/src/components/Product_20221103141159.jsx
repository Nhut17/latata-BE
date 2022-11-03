import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import StarRating from './StarRating';

const Product = ({data}) =>{

  const [priceDeal,setPriceDeal] = useState(1000)

  

    return (
     
        <div className="item-product" key={data._id}>

        <div className="image">
          <img src={data.images[0].url} alt="" />
        </div>

        <div className="name-product">
          <p>{data.name}</p>
        </div>

        <div className="price-old">
        {
                data.promotion > 0 ? (
                  <div className="">
                        <span className='initialPrice'>
                  {priceDeal
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                </span>
                  <span className='discount' >-{data.promotion}%</span>
                  </div>
                ) : ('')
              }
        </div>

        <p className='priceDeal'>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <span className='currency'>&#8363;</span>
            </p>

        <StarRating rating={data.ratings} />

        </div>
        
    )
}

export default Product