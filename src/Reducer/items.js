import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        item:"식비",
        budget:1200
    }];
export const itemsReducer = createSlice({
    name:"items",
    initialState,
    reducers:{
        ADD_ITEMS:(state,action)=>{
            state.push(action.payload);
        }
    }
});