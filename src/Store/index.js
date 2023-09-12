import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../Reducer/items";

export const store = configureStore({
    reducer:{
        item:itemsReducer.reducer
    }
});

