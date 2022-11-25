import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : null,
    success: false,
    loading: false,
    successRegister: false,
    successLogin: false,
    userDetail : {}
    listUser: []
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
                const res = await axios.post('http://localhost:4000/api/v1/register',data,config)

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
                const res = await axios.post('http://localhost:4000/api/v1/login',data,{
                    headers: headers
                })
                
                const token = res.data.token
                localStorage.setItem('token', token)


                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

// Logout 
export const logoutUser = createAsyncThunk('user/logout', 
        async(data,thunkAPI) => {
            try{
        
                const res = await axios.get('http://localhost:4000/api/v1/logout')

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('logout Failed!')
            }
        })

// Get User
export const getUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {
            try{
                
                const res = await axios.get('http://localhost:4000/api/v1/register')

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

export const getUserDetail = createAsyncThunk('user/userDetail',
        async(id, thunkAPI) => {
            try {
                const res = await axios.get(`http://localhost:4000/api/v1/user/${id}`)

                return res.data
            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.user = null
        }
    },
    extraReducers: {
        [registerUser.fulfilled]: (state,action) => {
            state.success = true
            state.successRegister = true
        },
        [loginUser.fulfilled]: (state,action) => {
            state.user = action.payload.user
            state.successLogin = true
        },

        [logoutUser.fulfilled]: (state,action) => {
            state.user = null
        },
        [getUserDetail.fulfilled] : (state, action) => {
            state.userDetail = action.payload
        }
    }
})
export const { logout } = userSlice.actions

export default userSlice.reducer