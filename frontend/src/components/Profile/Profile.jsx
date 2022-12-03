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
  const data = useSelector(state => state.user)

  useEffect(()=> {
    dispatch(getUserDetail(data.user._id));
  },[])
  console.log(data.user._id)
  return (
    <MainProfile data={data}/>
  )
}

export default Profile
