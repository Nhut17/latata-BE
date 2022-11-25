import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Listcate from "./Listcate";
import "./AdminCate.scss";
import { getAllCategories } from "../../../../redux/Admin/adminCateSlice"; 
import ListCate from "./ListCate";

function AdminCate() {
    const listCate = useSelector(state => state.adminCate.listCate)
    const dispatch = useDispatch()
    useEffect (()=> {
        dispatch(getAllCategories())
    },[dispatch])
   

    return (
        <div className="admin-cate">
            <div className="admin-cate-link">

                <Link to="/admin/category/create">
                    <button >
                        + Add Cate
                    </button>
                </Link>
            </div>

            {listCate &&
                <ListCate listCate={listCate} />
            }

        </div>
    );
}

export default AdminCate;
