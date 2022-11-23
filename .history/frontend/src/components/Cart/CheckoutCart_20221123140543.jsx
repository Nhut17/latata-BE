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

const CheckoutCart = () => {

  const dispatch = useDispatch()

  useEffect(() => {


  },[])

  return (
    <>
        <EmptyCart />> 
    </EmptyCart>
  )
}

export default CheckoutCart
