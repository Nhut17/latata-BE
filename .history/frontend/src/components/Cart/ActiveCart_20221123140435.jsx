import React from 'react'

const ActiveCart = () => {
  return (
    <div className='container container-cart'>
        <div className="title">
            <Link to='/' className="buy-another">Mua thêm sản phẩm khác</Link>
            <span >Giỏ hàng của bạn</span>
        </div>

        <div className='checkout-cart'>
        
            <ListingCart />
            <InfoCustomer />
            <Voucher />
            <FinalTotal />
        </div>
    </div>
  )
}

export default ActiveCart
