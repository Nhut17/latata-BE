import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../redux/Admin/adminUserSlice';
import ListUser from './ListUser';
import './AdminUser.scss'

function AdminUser() {
    const dispatch = useDispatch()
    const listUser = useSelector(state => state.adminUser.listUser)

    console.log(listUser)
    // useEffect(() => {
    //     console.log(document.cookie)
    // },[])

    useEffect(() => {
        dispatch(getAllUser())
<<<<<<< HEAD
    }, [])
=======
    }, [])
>>>>>>> d2f7f97be837853935532bac088efa30f599fee4
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