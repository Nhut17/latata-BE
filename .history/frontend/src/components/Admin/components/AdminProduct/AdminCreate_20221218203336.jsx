import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../../redux/Admin/adminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {PlusOutlined} from "@ant-design/icons";


function AdminCreate(props) {
  const { listCate } = useSelector(state => state.category)

  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm()

  const [selectImage,setSelectImage] = useState('')
  const [previewImg,setPreviewImg] = useState('')
  const [subCategories,setSubCategories] = useState('')



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
      navigate('/admin')
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

 const find = lis
console.log(find)
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
  
  const handleSelect = (e) => {

    setSubCategories(e.target.value)
  }
  console.log(subCategories)

  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleOnSubmit)}
        encType='multipart/form-data'
      >
        <div className="input-group">
          <p className="title">Tên sản phẩm</p>
       
          <input {...register("name",{
            required : true

          })} />

          {
            errors.name?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập Tên sản phẩm</span> 
          }
        </div>

        <div className="input-group">
          <p className="title">Danh mục</p>
         
          <select
            className="cate-select"
            {...register('category', {
              required: true,
              onChange: handleSelect
            })}  >
            {listCate.map(item => (  
                <option value={item?.name}  >{item?.name}</option>
            ))}
          </select>
        </div>

              
        {/* <div className="input-group">
                        <p className="title">Danh mục con</p>
                      
                        <select
                          className="cate-select"
                          {...register('subCate', {
                            required: true,
                          })}  >
                          {listCate.map(item => (
                            <option value={item?.name}>{item?.name}</option>
                          ))}
                        </select>        

                </div>  */}

        <div className="input-group">
          <span className="title">Giá</span>
          <input
            {...register("price",{
              required : true
            })}
            placeholder=""
            type="number"
          />

          {
            errors.name?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập Giá sản phẩm</span> 
          }
        </div>

        <div className="input-group">
          <span className="title">Giảm giá</span>
          <input {...register("promotion",{
            required : true
          })} placeholder="" type="number" />

          {
            errors.name?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập Giá sản phẩm</span> 
          }       
        </div>

        <div className="input-group">
          <span className="title">Số lượng</span>
          <input {...register("stock",{
            required : true
          })} placeholder="" type="number" />

          {
            errors.name?.type === 'required' &&
            <span className='err-msg'>Mời bạn nhập Giá sản phẩm</span> 
          } 
        </div>

        <span>Hình ảnh</span>

        <div className="img-group flex ">
          <form>
            <div class="image-upload">
              <label for="file-input">
                <div class="upload-icon">
                  <img src={previewImg} alt="" 
                
                  />
                  </div>
              </label>
              <input id="file-input" type="file"
              {...register("images")}
              onChange={handleImage}
              accept="images/*"
              />
            </div>
          </form>

        
        </div>

          <div className="input-group">
            <span className="title">Chi tiết sản phẩm</span>
            <textarea name="" id="" cols="30" rows="10" 
              {...register('description')} ></textarea>
          </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
