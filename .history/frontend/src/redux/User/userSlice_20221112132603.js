import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success: false,
    loading: false,
    successRegister: false
}


// Register 
export const registerUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {
            try{
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const res = await axios.post('api/v1/register',data,config)

                console.log(res.data)
                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

// Login
export const loginUser = createAsyncThunk('user/login', 
        async(data,thunkAPI) => {
            try{
                const headers = {
                    'Content-Type': 'application/json'
                }
                const res = await axios.post('api/v1/login',data,{
                    headers: headers
                })

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })


// Get User
export const getUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {
            try{
                
                const res = await axios.get('api/v1/register')

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.fulfilled]: (state,action) => {
            state.success = trueg
            state.successRe
        },
        [loginUser.fulfilled]: (state,action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer