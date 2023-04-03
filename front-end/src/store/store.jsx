import { configureStore } from "@reduxjs/toolkit"
import userReducers from "../feature/reducer"

const store = configureStore({
    reducer: {
        user : userReducers.reducer
    }
})


export default store
