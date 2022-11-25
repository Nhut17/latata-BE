import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../Product/productSlice";
import { getUser } from "../User/userSlice";

const initialState = {
    listUser: []
}


// delete product admin
export const deleteProduct = createAsyncThunk('admin/delete/product', 
                async(id,thunkAPI) => {
                    try{

                        console.log(id)

                        const res = await axios.delete(`http://localhost:4000/api/v1/admin/product/${id}
                            `)


                        thunkAPI.dispatch(getProduct())
                        return res.data
                    }
                    catch(e){

                    }
                })

// delete user admin
export const deleteUser = createAsyncThunk('admin/delete/user', 
                async(id,thunkAPI) => {
                    try{

                        console.log(id)

                        const res = await axios.delete(`http://localhost:4000/api/v1/admin/user/${id}`)


                        thunkAPI.dispatch(getUser())
                        return res.data
                    }
                    catch(e){

                    }
                })

// get all user
// Get User
export const getAllUser = createAsyncThunk('admin/user', 
        async(data,thunkAPI) => {
            try{
                
                const res = await axios.get('http://localhost:4000/api/v1/admin/users')

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

const adminSlice = createSlice({
    name: "admin",
    initialState,
})


export default adminSlice.reducer