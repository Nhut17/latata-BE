import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: []
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
                            `,c)


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

                        console.log(id)

                        const res = await api.delete(`/api/v1/admin/user/${id}`)


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
                
                const res = await api.get('/api/v1/admin/users')

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



                            const config = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }

                            const res = await api.post(`/api/v1/admin/product/new`,data,config)

                            // thunkAPI.dispatch(getProduct())
                            
                            return res.data
                    
                        }
                        catch(e){

                        }
                 })

                 
const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: {
        [getAllUser.fulfilled]: (state,action) => {
            state.listUser = action.payload
        }
    }
})


export default adminSlice.reducer