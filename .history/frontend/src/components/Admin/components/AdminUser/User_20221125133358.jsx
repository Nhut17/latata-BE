import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../redux/Admin/adminUserSlice';
import { DeleteOutlined} from '@ant-design/icons';

function User({ data, stt }) {
    // const {user, number} = props
    const dispatch = useDispatch()
    const handleOnDeleteCate = () => {
        dispatch(deleteUser(data.id))   
    }

    return (
        <tr>
            <td>{stt + 1}</td>
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            

            <div onClick={handleOnDeleteCate} 
                className='delete-user'
                
                >
                    <DeleteOutlined />
                </div>
        </tr>
        
    );
}

export default User;