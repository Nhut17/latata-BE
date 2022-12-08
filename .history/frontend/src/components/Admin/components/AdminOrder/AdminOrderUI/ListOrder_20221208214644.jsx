import React from 'react';
import { useSelector } from 'react-redux';
import Order from './Order';


function ListOrder(props) {

    const { } = useSelector(state => state.)

    return (
       <div className="all-order">
       <table>
       <tr>
           <th style={{ width: '7%' }}>Mã đơn</th>
           <th style={{ width: '20%' }}>Thông tin khách hàng</th>
           <th style={{ width: '10%' }}>Số lượng sản phẩm</th>
           <th style={{ width: '13%' }}>Tổng tiền</th>
           <th style={{ width: '13%' }}>Ngày mua</th>
           <th style={{ width: '10%' }}>Trạng thái</th>
           <th>Actions</th>
       </tr>

    


   </table>
       </div>
    );
}

export default ListOrder;