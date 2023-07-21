import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "./jobSlice";

const store = configureStore({
    reducer:{
        jobState:JobSlice
    }
})

export default store