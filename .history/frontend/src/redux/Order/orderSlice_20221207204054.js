import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../api/api"


const initialState = {

}

export const createOrder = createAsyncThunk('order/create', 
                async(data,thunkAPI) => {

                    try{

                        const res = await api.post('/')


                    }
                    catch(err){

                    }

                })



const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {

    }
})


export default orderSlice.reducer