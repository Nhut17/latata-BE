import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    listProductCate: [],
    productDetail: {},
    priceDeal: 0,
    message: '',
    loading: true ,
    listProductAdmin: []
}

export const getProducts = createAsyncThunk('product/getAll', async (data,thunkAPI) => {
    try{
        const res = await axios.get('http://localhost:4000/api/v1/products')
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with get api')
    }

})

// Delete Product
export const deleteProduct = createAsyncThunk('product/delete', 
        async (id,thunkAPI) => {
            try{
                
                const token = localStorage.getItem('token')
                const headers = {
                    Authorization: 'Bearer ' + token,
                }
                const res = await axios.delete(`http://localhost:4000/api/v1/product/${id}`,{
                        headers: headers
                })

                thunkAPI.dispatch(getAllProduct())
                return res.data

            }
            catch(e){
                return thunkAPI.rejectWithValue('Error with get product detail')
            }
        })