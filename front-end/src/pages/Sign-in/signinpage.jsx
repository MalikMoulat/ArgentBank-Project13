import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, getTokenUser } from '../../feature/reducer'

import axios from 'axios'

import './signinpage.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import SignInForm from '../../components/SignInForm/signInForm'

// import fetchToken from '../../Api/api'
import { fetchData } from '../../Api/api'

function SignInPage(){

    const userLogin = {
                    'email': "tony@stark.com",
                    'password': "password123"

                    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const [token, setToken] = useState('')
    const [userData, setUserData] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')


    const user = useSelector(state => state.user)
    // console.log('STORE login page :', user)

    // dispatch(getTokenUser(token))
    const userLogin2 = {
        'email': userEmail,
        'password': userPassword
        }

    // fetchToken(userLogin2, setToken)

    const fetchToken = async ( userLogin, setVar ) => {
    
        const errorDomMessage = document.getElementById('error-message-login')

        return axios({
            method: 'post',
            url: "http://localhost:3001/api/v1/user/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: userLogin
        }).then(result => {
                console.log(result.data.status)
    
                setVar(result.data.body.token)
                dispatch(getTokenUser(result.data.body.token))

                window.localStorage.setItem('TOKEN', result.data.body.token)

                if(result.data.body.token){
                    navigate('/user')
        
                }else{
                    console.log('NO TOKEN')
                }
    
            }
        ).catch(error => {  
                            console.error(error)

                            if(error.response.data.status === 400){
                                errorDomMessage.innerHTML = 'Invalid Fields'
                            }if(error.response.data.status === 500){
                                errorDomMessage.innerHTML = 'Internal Server Error'
                            }
                            
                            return Promise.reject(error)
                        })
    }

    

    const handleClick = (e) => {
        e.preventDefault()
        fetchToken(userLogin2, setToken)    
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
                <div id='error-message-login'>

                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"></input><label htmlFor="remember-me">Remember me</label>
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                {/* <a href="/user" className="sign-in-button">Sign In</a> */}
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                <button className="sign-in-button" 
                        onClick={handleClick} >Sign In</button>
                {/* <!--  --> */}
            </form>
        </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default SignInPage