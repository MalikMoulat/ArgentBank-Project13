import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchToken } from '../../actions/actions'
import './signinpage.css'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

function SignInPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState({ email: '', password: '' })

  const handleInputChange = (e) => {
    setUserLogin((prevUserLogin) => ({
      ...prevUserLogin,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchToken(userLogin, dispatch, navigate)
  }

  return (
    <React.Fragment>
        <Header />
        <main className="main bg-dark wrap-sign-form">
            <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={handleInputChange}
                    value={userLogin.email}
                />
                </div>
                <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleInputChange}
                    value={userLogin.password}
                />
                </div>
                <p id="error-message-login"></p>
                <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={handleSubmit}>
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
