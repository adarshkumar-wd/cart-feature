import { configureStore } from "@reduxjs/toolkit";
import mySlice from './Slice'

const Store = configureStore({
    reducer :  mySlice
})

export default Store