import React from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
const Admin = () => {

  const navigate = useNavi 

  return (
    <div className='bg-admin'>
        <MainAdmin></MainAdmin>
    </div>
  )
}

export default Admin
