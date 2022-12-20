import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'


const ProtectedRoute = ({}) => {

    const { currentUser } = useSelector(state => state.user)
  return (
    <React.Fragment>
   
       
    
    </React.Fragment>
  )
}

export default ProtectedRoute
