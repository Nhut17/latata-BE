import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";



function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const handleOnSubmit = (formData) => {

      console.log(formData)

  }
  
  return (
    <div className="admin-create">
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleOnSubmit)}
       
      >
        <span>Tên sản phẩm</span>
        <input {...register("name")} />

        <span>Danh mục</span>
        <input
          {...register("category")}
          placeholder=""
          type="number"
        />

        <span>Loại</span>
        <input
          {...register("type")}
          placeholder=""
          type="number"
        ></input>

        <span>Giá</span>
        <input {...register("price")} placeholder="" type="number"></input>

        <span>Số lượng</span>
        <input {...register("quantity")} placeholder="" type="number"></input>



        <div className="filter-menu-firm">
          {/* {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          } */}
        </div>

           

        <input
          type="file"
          {...register("image")}
          multiple
        />

          <span>Chi tiết sản phẩm</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
