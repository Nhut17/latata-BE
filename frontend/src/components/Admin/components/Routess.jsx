import React from 'react';
import { Route, Routes , BrowserRouter} from 'react-router-dom'
import DashBoard from './DashBoard/DashBoard';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminOrder from './AdminOrder/AdminOrder'
import AdminUser from './AdminUser/AdminUser';
// import AppChat from './AppChat/AppChat'
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct';
import DataFilterProduct from './AdminProduct/DataFilterProduct/DataFilterProduct';

function Routess(props) {
    return (
        <Routes>
            <Route path='/admin/'  element={<DashBoard />}/>
            <Route path='/admin/customer' element={<AdminUser />}/>

            <Route path='/admin/product/create' element={<AdminCreate />}/>
            <Route path='/admin/product/update/info'  element={<DataFilterProduct />}/>
            <Route path='/admin/product/update/:id' element={<AdminUpdate />}/>
            <Route path='/admin/product/reviewProduct/:id' element={<ReviewProduct />}/>
            <Route path='/admin/product/' element={<AdminProduct />}/>

            <Route path='/admin/order'  element={<AdminOrder />}/>
        </Routes>
    );
}

export default Routess;