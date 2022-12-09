import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../api/api'

const initialState = {
    user : null,
    success: true,
    loading: false,
    successRegister: false,
    successLogin: false,
    userDetail : {},
    message: null

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
                const res = await api.post('/api/v1/register',data,config)

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
                const res = await api.post('/api/v1/login',data,{
                    headers: headers
                })
                
                const token = res.data.token

                api.defaults.headers.common["Authorization"] = token
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
        
                const res = await api.get('/api/v1/logout')

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('logout Failed!')
            }
        })



export const getUserDetail = createAsyncThunk('user/userDetail',
        async(id, thunkAPI) => {
            try {
                const res = await api.get(`/api/v1/user/${id}`)

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
            state.successRegister = true
            state.message = null
        },
        [registerUser.rejected]: (state,action) => {
            state.successRegister = false
            state.message = action.payload.message
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
        },
       
    }
})
export const { logout } = userSlice.actions

export default userSlice.reducer