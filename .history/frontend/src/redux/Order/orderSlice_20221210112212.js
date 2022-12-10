import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import api from "../../api/api"
import { getCartUser } from "../Cart/cartSlice"


const initialState = {
    successOrder: false,
    listOrder: null
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
export const getAllOrder = createAsyncThunk('order/getAll', 
                async(data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.get('/api/v1/admin/orders',config)

                        return res.data

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error get all order')
                    }

                })

export const updateOrder =  createAsyncThunk('order/update', 
                async(data,thunkAPI) => {

                    const { id, status} = data
                    const t = {status}
                    console.log(t)
                    console.log(id)

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }
                    try{
                        const res = await axios.put(`/api/v1/admin/order/${id}`,t,config)

                        thunkAPI.dispatch(getAllOrder())
                        return res.data
                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error update order')
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
        },
        [getAllOrder.fulfilled]: (state,action) =>{
            state.listOrder = action.payload.orders
        },
        [getAllOrder.rejected]: (state,action) =>{

        }
    }
})


export default orderSlice.reducer