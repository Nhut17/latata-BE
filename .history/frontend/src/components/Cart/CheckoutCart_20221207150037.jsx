import React from 'react'
import '../../sass/cart/checkoutCart.scss'
import ListingCart from './ListingCart'
import { Link } from 'react-router-dom'
import InfoCustomer from './InfoCustomer'
import Voucher from './Voucher'
import FinalTotal from './FinalTotal'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import { getCartUser } from '../../redux/Cart/cartSlice'

const CheckoutCart = () => {

  const dispatch = useDispatch()
  const { } = us

  useEffect(() => {
    dispatch(getCartUser())

  },[])

  return (
    <React.Fragment>
        <ActiveCart />
        
    </React.Fragment>
  )
}

export default CheckoutCart
