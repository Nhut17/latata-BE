import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {

}

export const createOrder = createAsyncThunk('order/create', 
                async(data,thunkAPI) => {

                    try{
                        
                    }

                })



const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {

    }
})


export default orderSlice.reducer