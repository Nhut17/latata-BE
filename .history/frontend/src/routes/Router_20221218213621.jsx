
import React,{useParams} from "react";
import { Redirect, Route, Routes ,Link, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Tablet from "../pages/Tablet";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Watch from "../pages/Watch";
import EmptyCart from '../components/Cart/EmptyCart'

import SmartPhone from "../pages/SmartPhone";
import SmartTV from "../pages/SmartTV";


import SmartWatch from "../pages/SmartWatch";
import CheckoutCart from "../components/Cart/CheckoutCart";
import Acessories from "../pages/Acessories"
import Laptop from "../pages/Laptop";
import SmartHome from "../pages/SmartHome";
import ProductDetail from "../pages/ProductDetail";
import Admin from "../pages/Admin";
import AdminCreate from "../components/Admin/components/AdminProduct/AdminCreate";
import DataFilterProduct from "../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct";
import AdminUpdate from "../components/Admin/components/AdminProduct/AdminUpdate";
import ReviewProduct from "../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct";
import AdminProduct from "../components/Admin/components/AdminProduct/AdminProduct";
import AdminOrder from "../components/Admin/components/AdminOrder/AdminOrder";
import Dashboard from "../components/Admin/pages/Dashboard";
import AdminUser from "../components/Admin/components/AdminUser/AdminUser";
import Profile from "../components/Profile/Profile";
import AdminCate from "../components/Admin/components/AdminCate/AdminCate";
import AdminCreateCate from "../components/Admin/components/AdminCate/AdminCreateCate";
import MyOrders from "../pages/MyOrders";
import ForgotPassword from "../pages/ForgotPassword";
import GmailOTP from "../components/ForgotPassword/GmailOTP";
import ChangePassword from "../components/ForgotPassword/ChangePassword";
import Thankyou from "../pages/Thankyou";
// import Orders from "../components/Admin/Orders/Orders"


const Router = () => {
  
  return (
    <Routes>
      {/* HOME */}
      <Route path='/'  element={<Home />} />

      {/* LOGIN */}
      <Route path='/dang-nhap'  element={<Login />}/>
      <Route path='/quen-mat-khau'  element={<ForgotPassword />}/>
      <Route path='/sendOTP'  element={<GmailOTP />}/>
      <Route path='/change-password'  element={<ChangePassword />}/>




      <Route path='/profile'  element={<Profile />}/>


      {/* TABLET */}
      <Route path='/Tablet/:id'  element={<Tablet />} />

      <Route path='/dang-ky'  element={<Register />} />
      
      {/* WATCHES */}
      <Route path='/Đồng hồ/:id'  element={<Watch />} />

      <Route path='/empty-cart'  element={<EmptyCart />} />


      {/* SMART PHONE */}
      <Route path='/Điện thoại/:id'  element={<SmartPhone />} />

      {/* SMART TV */}
      <Route path='/Tivi/:id'  element={<SmartTV />} />


      {/* ACCESSORIES  */}
      <Route path='/phu-kien'  element={<Acessories />} />


      {/* SMART WATCH  */}
      <Route path='/smart-watch'  element={<SmartWatch />} />

      {/* CART */}
      <Route path='/cart'  element={<CheckoutCart />} />

      {/* LAPTOP */}

      <Route path='/laptop'  element={<Laptop />} />

      {/* SMARTHOME */}
      <Route path='/smart-home'  element={<SmartHome />} />
      

      {/* PRODUCT DETAIL */}
      <Route path='/product/:id'  element={<ProductDetail />} />

      {/* ORDER */}

      <Route path='/myOrder' element={<MyOrders/>}/>
       


      {/* ADMIN */}
      <Route path="/admin" element={<Admin />}>

          <Route index element={<Dashboard />} />
          {/* <Route path="categories" element={<AdminCategory />} /> */}

          <Route path="product" element={<AdminProduct />} />
          <Route path="product/create" element={<AdminCreate />} />
          <Route path="product/update/info/:id" element={<AdminUpdate />} />
  
          {/* <Route path="customers" element={<AdminCustomer />} /> */}
          <Route path="order" element={<AdminOrder />} />
          <Route path="customer" element={<AdminUser />} />

          <Route path="category" element={<AdminCate />} />
          <Route path="category/create" element={<AdminCreateCate />} />

          
          

      </Route>

      <Route path="*" element={<Navigate to="/" />} />


      <Route path="/thanks" element={<Thankyou />} />
      




    </Routes>
    
  );
};

export default Router;
