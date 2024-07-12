import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cardDetails : [
        {
            id : nanoid(),
            image : "",
            title : "Poco M6 Pro 5G",
            price : 11500
        },
        {
            id : nanoid(),
            image : "",
            title : "Plastic Chair",
            price : 5000
        },
        {
            id : nanoid(),
            image : "",
            title : "Camera",
            price : 20010
        },
        {
            id : nanoid(),
            image : "",
            title : "Tuf f15",
            price : 75000
        },
    ],
    cartCardDetails : [],
    isAuthenticated : false,
    userData : null
}

export const Slice = createSlice({
    name : "slice",
    initialState,
    reducers : {
        login : (state , action) => {
            state.isAuthenticated = true
            state.userData = action.payload
        },

        logout : (state , action) => {
            state.isAuthenticated = false
            state.userData = null
        },

        addTocart : () => {}
    }
})

export const {login , logout} = Slice.actions;
export default Slice.reducer;