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
  const name = 'CheckoutCart
  const { listCartUser } = useSelector(state => state.cart)
  const {successOrder } = useSelector(state => state.order)

  // toastify success order
  useEffect(() => {
    if(successOrder){
        toast('Đặt hàng thành công!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    
  }, [successOrder]);

  useEffect(() => {
    dispatch(getCartUser())

  },[])

  return (
    <React.Fragment>
            <ToastContainer />

      {
        listCartUser?.products &&
        listCartUser?.products.length > 0 ? <ActiveCart listCartUser={listCartUser} /> : <EmptyCart />
      }
        
        
    </React.Fragment>
  )
}

export default CheckoutCart
