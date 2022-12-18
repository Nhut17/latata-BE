import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../../../redux/Product/productSlice";

function AdminUpdate(props) {
  const { register, handleSubmit } = useForm();
 
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { productDetail } = useSelector(state => state.product)
  const {id} = useParams()

  console.log(productDetail)

  useEffect(() => {
    dispatch(getProductDetail(id))
  },[])

  const updateProduct =  (dataForm) => {
  
    // dispatch

  };


  let detailProduct = true;

  return (
    <div className="admin-create">
      <span>Cập nhật sản phẩm</span>
      {detailProduct ? (
        <form
        className="admin-create-product"
        onSubmit={handleSubmit(updateProduct)}
      >
        <span>Tên sản phẩm</span>
        <input  defaultValue={productDetail.name}
                {...register("name")} />

        <span>Danh mục</span>
        <input
          defaultValue={productDetail.category}
          disabled={true}
          {...register("category")}
          placeholder=""
          type="text"
        />

        <span>Giá</span>
        <input
          defaultValue={productDetail.}
          {...register("price")}
          placeholder=""
          type="number"
        />

        <span>Giảm giá</span>
        <input {...register("promotion")} placeholder="" type="number" />

        <span>Số lượng</span>
        <input {...register("stock")} placeholder="" type="number" />
    
        {/* <span>Hình ảnh</span>
        <img 
          src
          style={{
            width: 100,
            height: 100
          }} 
         />

        <input
          type="file"
          {...register("images")}
          onChange
          accept="images/*"
        /> */}
       

          <span>Chi tiết sản phẩm</span>
          <textarea name="" id="" cols="30" rows="10" 
            {...register('description')} ></textarea>

        <button type="submit">Cập nhật sản phẩm</button>
      </form>
  
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminUpdate;
