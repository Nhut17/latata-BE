import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { getProduct } from "../../../../redux/Product/productSlice";

const AdminProduct = () => {

  const dispatch = useDispatch();
  const { listProduct } = useSelector(state => state.product)

  const [search,setSearch] = useState('')

  useEffect(()=> {
    dispatch(getProduct())
  },[])

  // const searchProduct =  
  

  return (
    <div className="admin-product">

     

      <div className="admin-product-link">
        <div className="input-search">
        <i class="fa-solid fa-magnifying-glass ic"></i>
          <input type="text" placeholder="Tìm kiếm thông tin sản phẩm" />
        </div>
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
