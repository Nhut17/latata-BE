import React from 'react'
import StarRating from '../StarRating'
import FeedBack from './FeedBack'
import Information from './Information'
import Introduce from './Introduce'
const MainProductDetail = () => {
  return (
    <div className='product-detail'>
      <div className="product-category">
            <span className="product-category-title ">
                Phụ kiện
            </span>
            <span className="product-category-title">
            <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="product-category-title">
            Phụ kiện Oppo
            </span>
      </div>
      <div className="product-title flex a-center bd-bottom">
      <h2 className="product-title-name">Điện thoại Iphone</h2>
        <div className="product-title-star">
            <StarRating rating={5} />
        </div>

        <span className="product-title-review">0 đánh giá</span>
      </div>

      <Introduce/>
      <Information/>
      <FeedBack/>
    </div>
  )
}

export default MainProductDetail
