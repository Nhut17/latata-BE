import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    sucess: false,
    loading

}

const userSlice = createSlice({
    name: 'user',
    initialState,
})