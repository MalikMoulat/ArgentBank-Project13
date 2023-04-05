import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToken } from '../../actions/actions'

import './signinpage.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'


function SignInPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [token, setToken] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const user = useSelector(state => state.user)

    const userLogin = {
        'email': userEmail,
        'password': userPassword
        }

    const handleClick = (e) => {
        e.preventDefault()
        fetchToken(userLogin, setToken, dispatch, navigate)    
    }


    return(
        <React.Fragment>
            <Header />
            <main className='main bg-dark wrap-sign-form'>
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                onChange={(e) => setUserEmail(e.target.value)}
                            >    
                            </input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                onChange={(e) => setUserPassword(e.target.value)}
                            >
                            </input>
                        </div>
                        <p id='error-message-login'>

                        </p>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"></input><label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" 
                                onClick={handleClick} >
                                Sign In
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default SignInPage