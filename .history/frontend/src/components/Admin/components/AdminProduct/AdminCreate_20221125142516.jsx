import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";



function AdminCreate(props) {

  const [selectImage,setSelectImage] = useState()

  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const dispatch = useDispatch()


  // create product
  const handleOnSubmit = (formData) => {

    const { name,category,price,promotion,stock, description } = formData


    const data = {
      name,
      price,
      promotion,
      description,
      images:[{
        url: 'https://cdn.tgdd.vn/Products/Images/42/247508/TimerThumb/iphone-14-pro.jpg'
      }] ,
      category,
      stock,
      reviews: []
    }

    console.log(data)

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
          type="text"
        />

        <span>Giá</span>
        <input
          {...register("price")}
          placeholder=""
          type="number"
        />

        <span>Giảm giá</span>
        <input {...register("promotion")} placeholder="" type="number" />

        <span>Số lượng</span>
        <input {...register("stock")} placeholder="" type="number" />



        <div className="filter-menu-firm">
          {/* {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          } */}
        </div>

           
        <span>Hình ảnh</span>
        <input
          type="file"
          {...register("image")}
          onChange={(e) => setSelectImage(e.target.files[0])}
          multiple
        />

          <span>Chi tiết sản phẩm</span>
          <textarea name="" id="" cols="30" rows="10" 
            {...register('description')} ></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
