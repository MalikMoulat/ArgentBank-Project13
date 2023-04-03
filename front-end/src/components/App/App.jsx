import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"

import HomePage from "../../pages/Home/homepage"
import SignInPage from "../../pages/Sign-in/signinpage"
import UserPage from "../../pages/User/userpage"
import login from '../../Api/api'

import userReducers from "../../feature/reducer"
import store from '../../store/store'




// console.log(userReducers)
// console.log('STORE :', store)

function App() {
    return(
        <Provider store={store}>
                <React.Fragment>
                    <Router>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/sing-in' element={<SignInPage />} />
                            <Route path='/user' element={<UserPage />} />
                        </Routes>
                    </Router>
                </React.Fragment>
        </Provider>
    )
}

export default App