import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../Product/productSlice";

const initialState = {

}


// delete product admin
export const deleteProduct = createAsyncThunk('admin/delete', 
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
export const deleteProduct = createAsyncThunk('admin/delete', 
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


const adminSlice = createSlice({
    name: "admin",
    initialState,
})