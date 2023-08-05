import {createSlice} from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculatorSlice",
    initialState: {
        result: ''
    },
    reducers: {
        add: (state, action) => {
            state.result = Number(action.payload.firstValue) + Number(action.payload.secondValue)
        },
        subtract: (state, action) => {
            state.result = Number(action.payload.firstValue) - Number(action.payload.secondValue)
        },
        multiply: (state, action) => {
            state.result = Number(action.payload.firstValue) * Number(action.payload.secondValue)
        },
        divide: (state, action) => {
            state.result = Number(action.payload.firstValue) / Number(action.payload.secondValue)
        }
    }
})

export const {add, subtract, multiply, divide} = calculatorSlice.actions
export default calculatorSlice.reducer