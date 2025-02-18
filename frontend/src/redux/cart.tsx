import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        getCart:(state,action)=>{
            return {...state,...action.payload.data.cart}
        }
    }
});

export const {getCart} = cartSlice.actions;

export default cartSlice.reducer