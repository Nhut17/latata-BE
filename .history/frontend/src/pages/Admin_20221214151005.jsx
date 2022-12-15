import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Admin = () => {

  const navigate = useNavigate()
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispacth

  useEffect(() =>{
 
    if(!currentUser || currentUser?.user?.role === 'user'){
      console.log('admin redirect to home')
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
