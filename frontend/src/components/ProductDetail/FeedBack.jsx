import React from 'react'
import { product_detail } from './data'
const FeedBack = () => {
  return (
    <div className='product-feedback flex j-between bd-bottom'>
      <div className="product-review">
        <div className="product-review-header">
            <h3>Đánh giá điện thoại Iphone 14 Promax</h3>
        </div>
        
        <div className="product-review-statistics ">
            
            <div className='flex j-between'>
                <div className="product-review-statistic-star">
                    <div className="product-review-statistic-star-header flex j-between">
                            <span>0</span>
                            <div className="rate">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <span>Tổng: 0 đánh giá</span>
                    </div>                
                    <div className="product-review-statistic-star-list">
                    {/* <div className="product-review-statistic-star-item flex">
                    <span className="flex-10-width">5</span>
                    <i className="fa-solid fa-star icon-black flex-10-width"></i>
                    <div className="product-review-statistic-star-item-bar flex">
                        <div className="flex-70-width review-star"></div>
                        <div className="flex-30-width no-review"></div>
                    </div>
                    <span className="percent flex-10-width">70%</span>
                    </div>
                    <div className="product-review-statistic-star-item flex">
                    <span className="flex-10-width">4</span>
                    <i className="fa-solid fa-star icon-black flex-10-width"></i>
                    <div className="product-review-statistic-star-item-bar flex">
                        <div className="flex-80-width review-star"></div>
                        <div className="flex-20-width no-review"></div>
                    </div>
                    <span className="percent flex-10-width">20%</span>
                    </div>
                    <div className="product-review-statistic-star-item flex">
                    <span className="flex-10-width">3</span>
                    <i className="fa-solid fa-star icon-black flex-10-width"></i>
                    <div className="product-review-statistic-star-item-bar flex">
                        <div className="flex-90-width review-star"></div>
                        <div className="flex-10-width no-review"></div>
                    </div>
                    <span className="percent flex-10-width">10%</span>
                    </div>
                    <div className="product-review-statistic-star-item flex">
                    <span className="flex-10-width">2</span>
                    <i className="fa-solid fa-star icon-black flex-10-width"></i>
                    <div className="product-review-statistic-star-item-bar flex">
                        <div className="flex-0-width review-star"></div>
                        <div className="flex-100-width no-review"></div>
                    </div>
                    <span className="percent flex-10-width">0%</span>
                    </div>
                    <div className="product-review-statistic-star-item flex">
                    <span className="flex-10-width">1</span>
                    <i className="fa-solid fa-star icon-black flex-10-width"></i>
                    <div className="product-review-statistic-star-item-bar flex">
                        <div className="flex-0-width review-star"></div>
                        <div className="flex-100-width no-review"></div>
                    </div>
                    
                    <span className="percent flex-10-width">0%</span>
                    </div> */}
                </div>
                </div>
                <div className="product-review-statistic-image flex">
                    {product_detail.map(img => (
                        <img src={img.url} alt="" />
                    ))}
                </div>
            </div>
            
        </div>
        
        <div className="btn-review flex j-center">
            <button className='btn-write-review'><i class="fas fa-comment-dots"></i>Viết đánh giá</button>
            <button className='btn-see-more-review'>Xem thêm đánh giá</button>
        </div>
      </div>
      <div className="product-ask">
            <h3>Hỏi và đáp</h3>
            <div className="product-ask-input">
                <input type="text" placeholder='Xin mời đặt câu hỏi' />
                <button className='btn-send'>
                    <i class="fa-solid fa-paper-plane icon"></i>
                    Gửi
                </button>

            </div>
            
      </div>

    </div>
  )
}

export default FeedBack
