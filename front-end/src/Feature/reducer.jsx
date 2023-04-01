import { configureStore, createSlice } from "@reduxjs/toolkit"

const userReducers = createSlice({
    name: "login",
    initialState: {
        email: "",
        firstName: "Malik",
        lastName: "Moulat",
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
        }

    }
})

export const { getUserData, getTokenUser, updateUserName } = userReducers.actions







export default userReducers 