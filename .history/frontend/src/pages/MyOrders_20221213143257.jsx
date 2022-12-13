import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OrderList from '../components/MyOrder/OrderList'
import { myOrder } from '../redux/User/userSlice'
import '../sass/Order/order.scss'
// import MyOrder from '../components/MyOrder/MyOrder'
const MyOrders = () => {

  const dispatch = useDispatch()
  const { myOrders } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(myOrder())
  },[])

  return (
    <div className='order-list'>
            <div className="container">
              <span className='title'>Đơn hàng của tôi</span>
              <div className='my-order-list'>
                  {
                      myOrders &&
                      
                        myOrders.map(data => (
                          
                          <OrderList/>
                        ))
                      
                      
                  }
              </div>
            </div>

        </div>
    
  )
}

export default MyOrders
