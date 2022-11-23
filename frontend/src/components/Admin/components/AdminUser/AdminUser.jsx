import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../redux/Admin/adminSlice';
import ListUser from './ListUser';
import './AdminUser.scss'

function AdminUser(props) {
    const dispatch = useDispatch()
    const listUser = useSelector(state => state.admin.listUser)

    console.log(listUser)
    useEffect(() => {
        console.log(document.cookie)
    },[])

    useEffect(() => {
        dispatch(getAllUser())
    }, [listUser])
    return (
        <div className="admin-user">
            <span>Customers</span>
            {
                <ListUser listUser={listUser} />

                // <ListUser></ListUser>
            }
        </div>
    );
}

export default AdminUser;