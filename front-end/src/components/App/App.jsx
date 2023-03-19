import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from "../../pages/Home/homepage"
import SignInPage from "../../pages/Sign-in/signinpage"
import UserPage from "../../pages/User/userpage"

function App() {
    return(
        <React.Fragment>
            <Router>
                
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sing-in' element={<SignInPage />} />
                    <Route path='/user' element={<UserPage />} />
                </Routes>
            </Router>
        </React.Fragment> 
    )
}

export default App