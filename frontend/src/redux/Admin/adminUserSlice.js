import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    token: localStorage.getItem("token"),
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
   
        const headers = {
            
            // Authorization: 'Bearer ' + token,
            "x-auth-token": localStorage.getItem("token"),
        }
        const res = await axios.delete(`http://localhost:4000/api/v1/user/${id}`,{
                headers: headers,
        })


        localStorage.setItem("token", res.data);
        thunkAPI.dispatch(getAllUser())

        return res.data
    }
    catch(e){
        return thunkAPI.rejectWithValue('e.response.data');
    }
})

// Get All User
export const getAllUser = createAsyncThunk('user/getAllUser', async(data,thunkAPI) =>{
    try{
       
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
        }
        console.log(token)
        const res = await axios.get(`http://localhost:4000/api/v1/admin/users`,{
            headers: headers
        })
        console.log(res.data)
        return res.data
    }
    catch(e){
        // return e.message
    }
})


const adminUserSlice = createSlice({
    name: 'adminUser',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [getAllUser.fulfilled] : (state,action) => {
            state.listUser = action.payload.users
         
        },
        
    }
})

export const {} = adminUserSlice.actions

export default adminUserSlice.reducer