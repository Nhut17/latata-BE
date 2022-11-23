import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    error: false,
    loading: false,
    success: false,
    message: '',
    successRegister: false,
    listUser: []
}


// Get Delete User
export const deleteUser = createAsyncThunk('user/delete', async(id,thunkAPI) =>{
    try{
        const token = localStorage.getItem('auth',res.data.authenticated)
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        const res = await axios.delete(`http://localhost:4000/api/v1/user/${id}`,{
                headers: headers,
        })

        thunkAPI.dispatch(getAllUser())

        return res.data
    }
    catch(e){
        // return e.message
    }
})

// Get All User
export const getAllUser = createAsyncThunk('user/getAllUser', async(data,thunkAPI) =>{
    try{
       
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        const res = await axios.get(`http://localhost:4000/api/v1/admin/users`)
        console.log(res.data)
        return res.data
    }
    catch(e){
        // return e.message
    }
})


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [getAllUser.fulfilled] : (state,action) => {
            state.listUser = action.payload.users
         
        },
        
    }
})

export const {} = adminSlice.actions

export default adminSlice.reducer