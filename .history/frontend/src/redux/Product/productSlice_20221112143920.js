import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listProduct: [],
    loading: false,
    productDetail: {},
    priceDeal: 0,
}

// Get All Product
export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await axios.get('api/v1/products') 

                console.log('data: '+ res.data?.products)
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
                console.log('start')
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const res = await axios.get(`api/v1/products/636380ad80abddc169a9aa09`,config) 
                console.log('done')
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