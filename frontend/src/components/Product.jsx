import React from 'react';

import StarRating from './StarRating';

const Product = ({data}) =>{
    return (
        <div className="item-product" key={data.id}>

        <div className="image">
          <img src={data.imgUrl} alt="" />
        </div>

        <div className="name-product">
          <p>{data.name}</p>
        </div>

        <div className="price-old">
        {
                data.promotion > 0 ? (
                  <div className="">
                        <span className='initialPrice'>
                  {data.priceOld
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

        <StarRating rating={data.rating} />

      </div>
    )
}

export default Product