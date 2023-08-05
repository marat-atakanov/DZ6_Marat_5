import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        inputValue: ""
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action)=> {
            state.users = [...state.users, action.payload]
        },
        clear: (state, action) => {
            state.inputValue = ""
        },
        deleteAll: (state, action) => {
            state.inputValue = ""
            state.users = []
        }
    }
})

export const { changeInput, addUser, clear, deleteAll} = usersSlice.actions

export default usersSlice.reducer