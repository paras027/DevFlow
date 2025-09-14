import { configureStore } from "@reduxjs/toolkit/react";

import autSlice from "./Slices/AuthSlice";


export const store = configureStore({
    reducer:{
        auth: autSlice
    }
})

export default store;
    