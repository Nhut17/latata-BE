import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Listcate from "./Listcate";
import "./AdminCate.scss";

import ListCate from "./ListCate";

function AdminCate() {
 
    const dispatch = useDispatch()
   const listCate = []
   

    return (
        <div className="admin-cate">
            <div className="admin-cate-link">

                <Link to="/admin/category/create">
                    <button >
                        + Add Cate
                    </button>
                </Link>
            </div>

             {
                // listCate &&
            // <ListCate listCate={listCate} />
            //  } 

        </div>
    );
}

export default AdminCate;
