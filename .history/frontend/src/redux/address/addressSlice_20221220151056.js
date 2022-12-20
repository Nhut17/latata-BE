import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addAddress } from '../../../../backend/controllers/addressDeliveryController'
import api from '../../api/api'

const initialState = {

}


const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})

export default addAddress.