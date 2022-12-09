import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../../actions/OrderAction";


import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {


  return (
    <div>
      {/* {orders && orders.length > 0 ? (
        <ListOrder orders={orders}></ListOrder>
      ) : (
        <h4>Không có đơn hàng</h4>
      )} */}

      <ListOrder />>
    </div>
  );
}

export default AdminOrderAll;
