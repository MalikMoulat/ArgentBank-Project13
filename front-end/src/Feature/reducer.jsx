import { configureStore, createSlice } from "@reduxjs/toolkit"

const userReducers = createSlice({
    name: "login",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        id: "",
        token: ""
    },
    reducers: {
        getUserData: (state, action) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.id = action.payload.id
        },
        getTokenUser: (state, action) => {
            state.token = action.payload
        },
        updateUserName: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        resetState: (state) => {
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.id = ""
            state.token = ""
        }

    }
})

export const { getUserData, getTokenUser, updateUserName, resetState } = userReducers.actions







export default userReducers 