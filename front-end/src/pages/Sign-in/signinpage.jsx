import React from 'react'
import './signinpage.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import SignInForm from '../../components/SignInForm/signInForm'

function SignInPage(){
    return(
        <React.Fragment>
            <Header />
            <main className='main bg-dark wrap-sign-form'>
                <SignInForm />
            </main>
            
            <Footer />
        </React.Fragment>
    )
}

export default SignInPage