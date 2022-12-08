import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../api/api"
import { getCartUser } from "../Cart/cartSlice"


const initialState = {
    successOrder: false
}

export const createOrder = createAsyncThunk('order/create', 
                async(data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.post('/api/v1/order/new',data,config)

                        // thunkAPI.dispatch(getCartUser())
                        return res.data

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error create new order')
                    }

                })

// get orders - ADMIN
export const getAllOrder = createAsyncThunk('order/create', 
                async(data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.post('/api/v1/order/new',data,config)

                        // thunkAPI.dispatch(getCartUser())
                        return res.data

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error create new order')
                    }

                })
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
        [createOrder.fulfilled] : (state,action) =>{
            state.successOrder = true;
        },
        [createOrder.rejected]: (state,action) =>{
            state.successOrder = false
        }
    }
})


export default orderSlice.reducer