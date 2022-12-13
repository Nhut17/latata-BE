import React from 'react'
import { useDispatch } from 'react-redux'
import OrderList from '../components/MyOrder/OrderList'
import '../sass/Order/order.scss'
// import MyOrder from '../components/MyOrder/MyOrder'
const MyOrders = () => {

  const dispatch = useDispatch()
  const navigate = useN

  return (
    <div className='order-list'>
            <div className="container">
              <span className='title'>Đơn hàng của tôi</span>
              <div className='my-order-list'>
                  {
                      
                          <OrderList/>
                      
                  }
              </div>
            </div>

        </div>
    
  )
}

export default MyOrders
