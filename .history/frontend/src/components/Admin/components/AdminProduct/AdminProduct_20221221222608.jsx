import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { getProduct } from "../../../../redux/Product/productSlice";

const AdminProduct = () => {

  const dispatch = useDispatch();
  const { listProduct } = useSelector(state => state.product)

  useEffect(()=> {
    dispatch(getProduct())
  },[])
  

  return (
    <div className="admin-product">

      <div className="input-search">
        <input type="text" />
      </div>

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
