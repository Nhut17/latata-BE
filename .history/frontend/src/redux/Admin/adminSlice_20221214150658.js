import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: [],
    successCreate: false
}


// delete product admin
export const deleteProduct = createAsyncThunk('admin/product/delete', 
                async(id,thunkAPI) => {
                    try{

                        const token = localStorage.getItem('token')
                        const config = {
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }

                        const res = await api.delete(`/api/v1/admin/product/${id}
                            `,config)


                        thunkAPI.dispatch(getProduct())
                        return res.data
                    }
                    catch(e){

                    }
                })

// delete user admin
export const deleteUser = createAsyncThunk('admin/user/delete', 
                async(id,thunkAPI) => {
                    try{

                        const token = localStorage.getItem('token')
                        const config = {
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }

                        const res = await api.delete(`/api/v1/admin/user/${id}`,config)


                        thunkAPI.dispatch(getAllUser())
                        return res.data
                    }
                    catch(e){

                    }
                })

// get all user
export const getAllUser = createAsyncThunk('admin/user', 
        async(data,thunkAPI) => {
            try{
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
                
                const res = await api.get('/api/v1/admin/users',config)

                return res.data.users
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })


// create product admin 
export const createProduct = createAsyncThunk('admin/product/create',
                 async(data,thunkAPI) => {
                        try{
                            const token = localStorage.getItem('token')
                            const config = {
                                headers: {
                                    Authorization: 'Bearer ' + token,
                                
                                }
                            }
                           
                            const res = await api.post('/api/v1/admin/product/new',data,config)
            
                            // thunkAPI.dispatch(getProduct())
                            
                            return res.data
                    
                        }
                        catch(e){

                        }
                 })

                 
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers:{
        resetActionAdmin: (state)
    },
    extraReducers: {
        [getAllUser.fulfilled]: (state,action) => {
            state.listUser = action.payload
        },
        [createProduct.fulfilled]: (state,action) => {
            state.successCreate = true
        },
        [createProduct.rejected]: (state,action) => {
            state.successCreate = false
        },
    }
})


export default adminSlice.reducer