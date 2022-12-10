import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { useDispatch } from "react-redux";
import Modal from 'react-modal';
import ModalCart from "./ModalCart";



function Order({data}) {

  const dispatch =  useDispatch

  // confirm order
  const handleConfirm = () => {
    const data ={
      id: data.id,
      status: "DELIVERING"
    }

    
  
  }


  // cancel order
  const handleCancel = () =>{
    
  }

  // detail order 
  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)


  return (
    
    <React.Fragment>

    <tr>
    <td className="id-order">#{data._id.slice(0,7)}</td>
    <td className="product-name" >{data.name}</td>
    <td className="quantity">{data.quantity}</td>
    <td className="total-price"><span className="price-old">{data.totalPrice?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      <span className='currency'>&#8363;</span></span></td>
    <td className="date-buy">{data.createAt}</td>
 
    {
      data.status === 'PENDING' &&
      <td><span className="status pending">{data.status}</span></td>
    }
    {
      data.status === 'DONE' &&
      <td><span className="status done">{data.status}</span></td>
    }
    {
      data.status === 'CANCELED' &&
      <td><span className="status cancel">{data.status}</span></td>
    }
    
    <td className="btn-group"
      style={{

      }} >
      <button className={data.status === 'PENDING' ? "confirm btn" : "confirm btn disable"}
        onClick={handleConfirm} >
  
        <span className="action done">Xác nhận đơn</span>
      </button>
      <button className={data.status === 'PENDING' ? "cancel btn" : "cancel disable btn"} onClick={handleCancel}>
 
        <span className="action cancel"> Hủy đơn</span>
      </button>

      <button className="detail btn" onClick={handleClickOrderDetail}
      >
        
        <span className="action pending">Xem chi tiết</span>
        
        
      </button>
    </td>
  </tr>

    <ModalCart showOrderDetail={showOrderDetail} setShowOrderDetail={setShowOrderDetail} data={data} />

    </React.Fragment>
    
  );

}


export default Order;
