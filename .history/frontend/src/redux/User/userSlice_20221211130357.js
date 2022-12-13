import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../api/api'
import { clearAuthHeader, setAuthHeader } from '../../api/setHeader'

const initialState = {

    user : null,
    success: false,
    loading: false,
    successRegister: false,
    successLogin: false,
    userDetail : {},
    message: null,
    currentUser: null,
    accessToken: null,
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
                
               
                const res = await api.post('/api/v1/login',data)
                setAuthHeader(res.data.token)
  
                localStorage.setItem('token', res.data.token)

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


// detail User
export const getUserDetail = createAsyncThunk('user/userDetail',
        async(id, thunkAPI) => {
            try {

                const res = await axios.get(`http://localhost:4000/api/v1/admin/user/${id}`)
                
                return res.data.user
                

                // const res = await api.get(`/api/v1/user/${id}`)

                // return res.data

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

// get al User
export const getAllUser = createAsyncThunk('user/getAll',
        async(id, thunkAPI) => {
            try {

                const res = await axios.get(`http://localhost:4000/api/v1/admin/user/${id}`)
                
                return res.data.user
                

                // const res = await api.get(`/api/v1/user/${id}`)

                // return res.data

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
           
        }
    },
    extraReducers: {
        [registerUser.fulfilled]: (state,action) => {
            state.successRegister = true
        },
        [registerUser.rejected]: (state,action) => {
            state.message = action.payload.message
        },
        [loginUser.fulfilled]: (state,action) => {
            state.currentUser = action.payload
            state.successLogin = true
            state.accessToken = action.payload.token
        },
        [getUserDetail.fulfilled] : (state, action) => {
            state.currentUser = action.payload
            state.accessToken = action.payload.token

        },
       [logoutUser.fulfilled]: (state,action) => {
            state.currentUser = null
       }
    }
})
export const { logout } = userSlice.actions

export default userSlice.reducer