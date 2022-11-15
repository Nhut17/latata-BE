import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    province: {}
}

export const getProvince = createAsyncThunk('province', 
            async(data,thunkAPI) => {
                try{
                    const res = await axios.get('https://provinces.open-api.vn/api/depth==3')

                    console.log('res: ' + res.data)

                    return res.data
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