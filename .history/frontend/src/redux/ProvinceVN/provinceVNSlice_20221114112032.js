import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    province: {}
}

export getProvince = createAsyncThunk('province', 
            async(data,thunkAPI) => {
                try{
                    const res = await axios.get()
                }
                catch(e)
                {

                }
            })

const provinceVNSlice = createSlice({
    name: 'province',
    initialState,
    extraReducers: {

    }
})

export default provinceVNSlice.reducer