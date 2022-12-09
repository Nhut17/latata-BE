import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Admin = () => {

  const navigate = useNavigate()
  const {user} = useSelector(state => state.user)

  useEffect(() =>{
 
    if(!user || user.role === 'user'){
      navigate('/')
  }
  },[])

  return (  
    <div className='bg-admin'>
        <MainAdmin></MainAdmin>
    </div>
  )
}

export default Admin
