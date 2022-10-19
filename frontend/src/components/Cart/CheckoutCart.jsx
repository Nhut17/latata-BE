import React from 'react'
import '../../sass/cart/checkoutCart.scss'
import ListingCart from './ListingCart'
import { Link } from 'react-router-dom'
import InfoCustomer from './InfoCustomer'
import Voucher from './Voucher'
import FinalTotal from './FinalTotal'


const CheckoutCart = () => {
  return (
    <div className='container container-cart'>
        <div className="title">
            <Link to='/' className="buy-another">Mua thêm sản phẩm khác</Link>
            <span >Giỏ hàng của bạn</span>
        </div>

        <form className='checkout-cart'>
            <ListingCart />
            <InfoCustomer />
            <Voucher />
            <FinalTotal />
        </form>
    </div>
  )
}

export default CheckoutCart
