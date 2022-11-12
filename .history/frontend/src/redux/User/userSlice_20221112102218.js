import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    sucess: false,
    loading: false,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
})