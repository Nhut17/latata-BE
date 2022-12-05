import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'
import { getAllUser } from '../../../../redux/Admin/adminSlice';
// import { createAxios } from '../../../../api/createInstance';



function AdminUser() {
    const dispatch = useDispatch()
    const { listUser } = useSelector(state => state.admin)
    const { currentUser } = useSelector(state => state.user)

    // const axiosJWT = createAxios(currentUser)

    useEffect(() => {
        dispatch(getAllUser(axiosJWT))
    }, [])

    return (
        <div className="admin-user">
            <span>Customers</span>
            {
                <ListUser listUser={listUser} />

            
            }
        </div>
    );
}

export default AdminUser;