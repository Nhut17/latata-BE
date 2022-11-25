import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   paginationProduct,
// } from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { AppstoreAddOutlined, PlusOutlined, ToolOutlined } from "@ant-design/icons";
import {getAllProducts} from '../../../../redux/Admin/adminProductSlice'

function AdminProduct() {
  const dispatch = useDispatch();
  const {listProduct} = useSelector(state => state.product)

  useEffect(()=> {
    dispatch(getAllProducts())
  },[])
  

  return (
    <div className="admin-product">
      <div className="admin-product-link">
       
        <Link to="/admin/product/create"> 
          <button >
            + Add Product
          </button>
        </Link>
      </div>
      
      
      <ListProduct listProduct={listProduct} />
      
    </div>
  );
}

export default AdminProduct;
