import React from "react"
import './signInForm.css'

function SignInForm() {
    return(
        <section className="sign-in-content">
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label for="username">Username</label><input type="text" id="username"></input>
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label><input type="password" id="password"></input>
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me"></input><label for="remember-me">Remember me</label>
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                <a href="/user" class="sign-in-button">Sign In</a>
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
                {/* <!--  --> */}
            </form>
        </section>

    )
}

export default SignInForm