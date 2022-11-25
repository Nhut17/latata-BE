import React from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

  const navigate = useNavigate() 

  return (
    <div className='bg-admin'>
        <MainAdmin></MainAdmin>
    </div>
  )
}

export default Admin
