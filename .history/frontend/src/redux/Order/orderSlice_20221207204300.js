import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../api/api"


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

                        return res.data

                    }
                    catch(err){

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