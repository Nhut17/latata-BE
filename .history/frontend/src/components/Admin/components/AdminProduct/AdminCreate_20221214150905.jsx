import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../../redux/Admin/adminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function AdminCreate(props) {

  
  const [selectImage,setSelectImage] = useState('')
  const [previewImg,setPreviewImg] = useState('')
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const { successCreate } = useSelector(state => state.admin)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(successCreate){
      toast.success('Thêm sản phẩm thành công', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });

    const time = setTimeout(() => {
      navigate('/admin/product')
    },1500)

    return () => {
      clearTimeout(time)
    }

    }
  },[successCreate])


// hanlde up image
  const handleImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2){
        setPreviewImg(reader.result)
        setSelectImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

 

  // create product
  const handleOnSubmit = (formData) => {

    const { name,category,price,promotion,stock, description } = formData


    const data = {
      name,
      price,
      promotion,
      description,
      images: [{
        url: JSON.stringify(selectImage)
      }] ,
      category,
      stock,
      reviews: []
    }

    const dataS= new FormData()
    dataS.set('name', name)
    dataS.set('price', price)
    dataS.set('promotion', promotion)
    dataS.set('description', description)
    dataS.set('images', selectImage)
    dataS.set('category', category)
    dataS.set('stock', stock)

    dispatch(createProduct(dataS))
   
  }
  
  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleOnSubmit)}
        encType='multipart/form-data'
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
        <img 
          src={previewImg}
          style={{
            width: 100,
            height: 100
          }} 
         />

        <input
          type="file"
          {...register("images")}
          onChange={handleImage}
          accept="images/*"
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
