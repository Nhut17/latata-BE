import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getCartUser } from "../Cart/cartSlice";


const initialState = {
    listProduct: [],
    loading: false,
    productDetail: {},
    priceDeal: 0,
    listProductCate: null
}

// Get All Product
export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await api.get('/api/v1/products') 

                // thunkAPI.dispatch(getCartUser())
                return res.data?.products
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })
        
// Get All Product
export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await api.get('/api/v1/products') 

                // thunkAPI.dispatch(getCartUser())
                return res.data?.products
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })


// Get Product Detail
export const getProductDetail = createAsyncThunk('product/productDetail', 
        async(id,thunkAPI) => {
            try{
                const res = await api.get(`/api/v1/product/${id}`) 
                return res.data.product
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })



const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProduct.pending]: (state,action) => {
            state.loading = true
        },
        [getProduct.fulfilled]: (state,action) => {
            state.loading = false;
            state.listProduct = action.payload
        },
        [getProduct.rejected]: (state,action) => {

        },
        [getProductDetail.fulfilled] : (state,action) => {
            state.productDetail = action.payload
            state.priceDeal  = state.productDetail.price - state.productDetail.price*(state.productDetail.promotion / 100) 
        }
    }

})



export default productReducer.reducer;