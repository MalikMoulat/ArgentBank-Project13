import { configureStore, createSlice } from "@reduxjs/toolkit"

const userReducers = createSlice({
    name: "login",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        id: null,
        token: null
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
            state.email = null
            state.firstName = null
            state.lastName = null
            state.id = null
            state.token = null
        }

    }
})

export const { getUserData, getTokenUser, updateUserName, resetState } = userReducers.actions







export default userReducers 