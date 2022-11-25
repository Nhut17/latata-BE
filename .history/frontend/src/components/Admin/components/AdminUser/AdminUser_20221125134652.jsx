import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'
import { getUser } from '../../../../redux/User/userSlice';

function AdminUser() {
    const dispatch = useDispatch()
    const { listUser } = useSelector(state => state.admin)

  

    useEffect(() => {
        dispatch(getUser())
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