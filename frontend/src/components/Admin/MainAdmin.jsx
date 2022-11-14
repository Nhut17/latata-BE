import React from "react";
import { useSelector } from "react-redux";
import "./MainAdmin.css";
import {  Outlet } from "react-router-dom";
import Routess from './components/Routess'
import Sidebar from "./components/sidebar/Sidebar";
import AdminNavBar from "./components/AdminNavBar/AdminNavBar";

// import Routes from "../../routes/Routes";

function MainAdmin (props) {
  
  return (
    

    <div className="admin">
            
      <AdminNavBar>
        <Outlet />
      </AdminNavBar>


      
    </div>
    
  );
}

export default MainAdmin;
