
import React,{useParams} from "react";
import { Redirect, Route, Switch ,Link} from "react-router-dom";

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
// import Orders from "../components/Admin/Orders/Orders"


const Router = () => {
  
  return (
    <Switch>
      {/* HOME */}
      <Route path='/' exact component={Home} />


      {/* LOGIN */}
      <Route path='/dang-nhap' exact component={Login}/>

      {/* TABLET */}
      <Route path='/tablet' exact component={Tablet} />

      <Route path='/dang-ky' exact component={Register} />
      
      {/* WATCHES */}
      <Route path='/dong-ho' exact component={Watch} />

      <Route path='/empty-cart' exact component={EmptyCart} />


      {/* SMART PHONE */}
      <Route path='/dien-thoai' exact component={SmartPhone} />

      {/* SMART TV */}
      <Route path='/tv' exact component={SmartTV} />


      {/* ACCESSORIES  */}
      <Route path='/phu-kien' exact component={Acessories} />


      {/* SMART WATCH  */}
      <Route path='/smart-watch' exact component={SmartWatch} />

      {/* CART */}
      <Route path='/cart' exact component={CheckoutCart} />

      {/* LAPTOP */}

      <Route path='/laptop' exact component={Laptop} />

      {/* SMARTHOME */}
      <Route path='/smart-home' exact component={SmartHome} />
      

      {/* PRODUCT DETAIL */}
      <Route path='/product-detail' exact component={ProductDetail} />


      {/* ADMIN */}
      <Route path='/admin' exact component={Admin} />

      {/* <Route path="/admin/orders" exact component={Orders} /> */}


      <Route path='/admin/' exact component={Dashboard}/>
            {/* <Route path='/admin/customer' component={AdminUser}/> */}

      <Route path='/admin/product/create' component={AdminCreate}/>
      <Route path='/admin/product/update/info' component={DataFilterProduct}/>
      <Route path='/admin/product/update/:id' component={AdminUpdate}/>
      <Route path='/admin/product/reviewProduct/:id' component={ReviewProduct}/>
      <Route path='/admin/product/' component={AdminProduct}/>

      <Route path='/admin/order' component={AdminOrder}/>
            {/* <Route path='/admin/chat' component={AppChat}/> */}


    </Switch>
    
  );
};

export default Router;
