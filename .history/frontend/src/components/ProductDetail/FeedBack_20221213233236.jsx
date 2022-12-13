import React from 'react'
// import { product_detail } from './data'
import StarRating from '../../components/StarRating'
import ListUserReview from './ListUserReview'

const FeedBack = ({data}) => {
  return (
    <div className='product-feedback flex j-between bd-bottom'>
      <div className="product-review">
        <div className="product-review-header">
            <h3>Đánh giá {data.name}</h3>
        </div>
        
        <div className="product-review-statistics ">
            
            <div>
                <div className="product-review-statistic-star">
                    <div className="product-review-statistic-star-header flex j-between">
                            <p className='star-average'>
                                <span className='star-number'>{data.ratings}/5</span>
                                <StarRating rating={data.ratings}/>
                            </p>
                            
                            <p className='star-sum'>Tổng: {data.numOfReviews} đánh giá</p>
                    </div>                
                    {/* <div className="product-review-list flex">
                        <div className="review-detail flex">
                            <div className="review-avatar">
                                <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg" alt="" />
                            </div>
                            <div className="review-content">
                                <span>bichtram</span> <br />
                                <StarRating rating={4}/> <br />
                                <p className='time-review'>2022-11-30 09:07</p>
                                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia eveniet nulla alias, tempore molestias repudiandae quam dolorem suscipit assumenda soluta praesentium aliquam, autem sapiente necessitatibus modi laborum asperiores temporibus.</p>
                            </div>
                        </div>
                        
                   
                    </div> */}
                    {
                        data.reviews &&
                        reviews
                    }
                </div>
                <div className="product-review-statistic-image flex">
                   
                </div>
            </div>
            
        </div>
        
        <div className="btn-review flex j-center">
         

           
            <button className='btn-see-more-review'>Xem thêm đánh giá</button>
        </div>
      </div>
    

    </div>
  )
}

export default FeedBack
