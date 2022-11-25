import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../Product/productSlice";
import { getUser } from "../User/userSlice";

const initialState = {

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


const adminSlice = createSlice({
    name: "admin",
    initialState,
})