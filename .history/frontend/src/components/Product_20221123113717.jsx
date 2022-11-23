import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import StarRating from './StarRating';

const Product = ({data}) =>{

  const [priceDeal,setPriceDeal] = useState(data.price - data.price*(data.promotion/100))
  


    return (

     <Link to={`/product/${data._id}`} reloadDocument>
        <div className="item-product" key={data._id}>

        <div className="image">
           <img src={data?.images[0].url} alt="" /> 
          {/* <img src='https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-bac-thumb-600x600.jpg' alt="" /> */}
        </div>

        <div className="name-product">
          <p>{data.name}</p>
        </div>

        <div className="price-old">
        {
                data.promotion > 0 ? (
                  <div className="">
                        <span className='initialPrice'>
                  {data.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                </span>
                  <span className='discount' >-{data.promotion}%</span>
                  </div>
                ) : ('')
              }
        </div>

        <p className='priceDeal'>{priceDeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <span className='currency'>&#8363;</span>
            </p>

        <StarRating rating={data.ratings} />

        </div>
     </Link>
        
    )
}

export default Product