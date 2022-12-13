import React from 'react'
import '../../sass/cart/checkoutCart.scss'
import { Link } from 'react-router-dom'
import InfoCustomer from './InfoCustomer'
import Voucher from './Voucher'
import FinalTotal from './FinalTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import { getCartUser } from '../../redux/Cart/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutCart = () => {

  const dispatch = useDispatch()
  const { listCartUser } = useSelector(state => state.cart)


  useEffect(() => {
    dispatch(getCartUser())

  },[])

  return (
    <React.Fragment>
      {
        listCartUser?.products &&
        listCartUser?.products.length > 0 ? <ActiveCart listCartUser={listCartUser} /> : <EmptyCart />
      }
        
        
    </React.Fragment>
  )
}

export default CheckoutCart
