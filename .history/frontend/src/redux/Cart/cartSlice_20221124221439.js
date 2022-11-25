const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
})