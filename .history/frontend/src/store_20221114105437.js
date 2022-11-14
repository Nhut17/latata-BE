import { configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/Product/productSlice'
import userSlice from './redux/User/userSlice'




const store = configureStore({
    reducer:{
        product: productSlice,
        user: userSlice

    }
}) 

export default store