import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id:0,
        item:"식비",
        budget:1200
    }];
export const itemsReducer = createSlice({
    name:"items",
    initialState,
    reducers:{
        ADD_ITEMS:(state,action)=>{
            state.push(action.payload);
        },
        EDIT_ITEMS:(state,action)=>{
            state.splice(action.payload.id,1,action.payload);
        },
        DELETE_ITEMS:(state,action)=>{
            state.splice(action.payload,1);
            return state
        },
        RESET_ITEMS:(state)=>{
            state.splice(0,state.length)
        }
    }
});