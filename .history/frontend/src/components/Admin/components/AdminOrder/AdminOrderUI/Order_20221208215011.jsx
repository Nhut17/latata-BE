import React from "react";
import { useDispatch } from "react-redux";



function Order({data}) {

  const handleConfirm = () => {
    console.log('data:', data)
  
  }

  const handleCancel = () => {
    
  }
  const handleClickOrderDetail = () => {
    
  }

  return (
    
    <React.Fragment>

    <tr>
    <td className="id-order">#{data._id}</td>
    <td className="product-name" >{data.name}</td>
    <td className="quantity">{data.quantity}</td>
    <td className="total-price"><span className="price-old">{data.totalPrice?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      <span className='currency'>&#8363;</span></span></td>
    <td className="date-buy">{data.createAt}</td>
    {
      data.ordStatus === 'PENDING' &&
      <td><span className="status pending">{data.status}</span></td>
    }
    {
      data.ordStatus === 'DONE' &&
      <td><span className="status done">{data.status}</span></td>
    }
    {
      data.ordStatus === 'CANCELED' &&
      <td><span className="status cancel">{data.ordStatus}</span></td>
    }
    <td className="btn-group"
      style={{

      }} >
      <button className={data.ordStatus === 'PENDING' ? "confirm btn" : "confirm btn disable"}
        onClick={handleConfirm} >
        {/* <i class="fas fa-check"></i> */}
        <span>Xác nhận đơn</span>
      </button>
      <button className={data.ordStatus === 'PENDING' ? "cancel btn" : "cancel disable btn"} onClick={handleCancel}>
        {/* <i class="fas fa-window-close"></i> */}
        <span> Hủy đơn</span>
      </button>

      <button className="detail btn" onClick={handleClickOrderDetail}
      >
        {/* <i class="fas fa-eye"> </i> */}
        <span>Xem chi tiết</span>
      </button>
    </td>
  </tr>

    </React.Fragment>
    
  );
}

export default Order;
