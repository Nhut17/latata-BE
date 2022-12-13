import React from 'react'
// import { product_detail } from './data'
import StarRating from '../../components/StarRating'
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
                                <span className='star-number'>0/5</span>
                                <StarRating rating={4.5}/>
                            </p>
                            
                            <p className='star-sum'>Tổng: 0 đánh giá</p>
                    </div>                
                    <div className="product-review-list flex">
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
                        
                   
                    </div>
                </div>
                <div className="product-review-statistic-image flex">
                    {/* {product_detail.map(img => (
                        <img src={img.url} alt="" />
                    ))} */}
                </div>
            </div>
            
        </div>
        
        <div className="btn-review flex j-center">
            {/* <button className='btn-write-review'><i class="fas fa-comment-dots"></i>Viết đánh giá</button> */}

           
            <button className='btn-see-more-review'>Xem thêm đánh giá</button>
        </div>
      </div>
      {/* <div className="product-ask">
            <h3>Hỏi và đáp</h3>
            <div className="product-ask-input">
                <input type="text" placeholder='Xin mời đặt câu hỏi' />
                <button className='btn-send'>
                    <i class="fa-solid fa-paper-plane icon"></i>
                    Gửi
                </button>

            </div>
            
      </div> */}

    </div>
  )
}

export default FeedBack
