import { React, useState ,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from '../../redux/Order/orderSlice';
// import { cancelByUser } from '../../redux/reducer/orderSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EachTransaction from './EachTransaction'
const OrderList = ({ data }) => {
    const [evaluated, setEvaluated] = useState(
        data?.status === 'DONE' ? true : false
    )

    const dispatch= useDispatch()
    const {successUpdateOrder} = useSelector(state => state.order)
    
    // toastify success cancel order
    useEffect(() => {
      if(successUpdateOrder){
          toast('Hủy đơn hàng thành công!', {
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
      
    }, [successUpdateOrder]);


    const cancelOrder = () => {
        const cancel = {
            id: data._id,
            status: 'CANCELLED'
        }

        dispatch(updateOrder(cancel))
    }

    return (
        <div className='order-detail'>
            <ToastContainer />

        {data?.status === 'DONE' &&
        <p className='summary-status-done'><i class="fa-solid fa-circle icon"></i> Giao hàng thành công</p>
    }
         {
            data.orderItems.map(orders => (

                <EachTransaction evaluated={evaluated}
                                orders={orders}
                                 />
            ))
         }

           
          
            <div className='summary-order flex j-between'>
                
                <p className='summary-address'>Địa chỉ:<b>{data.address}</b></p>
                <p className='summary-date'>Ngày đặt: <b>{data.createAt}</b></p>
                <p className='summary-phone'>Số điện thoại: <b>{data.phoneNo}</b></p>
                {data?.status === 'PENDING' &&
                    <p className='summary-status-pending'><i class="fa-solid fa-circle icon"></i> {data?.status}</p>
                }
                
                
                {data?.status === 'CANCELED' &&
                    <p className='summary-status-cancel'><i class="fa-solid fa-circle icon"></i> {data?.status}</p>
                } 

                <p className='summary-total-price'>Tổng tiền: {data.totalPrice.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></p>
            </div>

            {/* <div className='cancel-order' hidden={data?.status === 'PENDING' ? false : true}>
                <button>Hủy đơn hàng </button>
            </div> */}
           


            <div className="action flex ">
                <div className='btn-action '
                >
                    <button onClick={cancelOrder}>Hủy đơn hàng </button>
                </div>

            <div className='btn-action '>
                <button>Đánh giá</button>
            </div>

            </div>

            

            
         </div>
    )
}
export default OrderList