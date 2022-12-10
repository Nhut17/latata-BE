import React from 'react'
import '../../sass/Profile/profile.scss'
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail } from '../../redux/User/userSlice';
import { useEffect } from 'react';
import MainProfile from './MainProfile';
const Profile = () => {
  // const { id } = useParams()

  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  console.log(currentUser)

  // useEffect(()=> {
  //   dispatch(getUserDetail(currentUser?.user?._id));
  // },[])
  // console.log(currentUser?._id)
  return (
    <MainProfile currentUser={currentUser.user}/>
  )
}

export default Profile
