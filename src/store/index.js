import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
    reducer: {
        calculatorReducer,
        usersReducer
    }
})