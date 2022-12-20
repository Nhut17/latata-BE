import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

const initialState = {
    listAddress: null,

}


const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})

export default addressSlice.reducer