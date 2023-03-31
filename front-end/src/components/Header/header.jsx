import React from 'react'
import './header.css'
import logo from '../../assets/img/argentBankLogo.png'

import { useSelector } from 'react-redux'

function Header() {

  const user = useSelector(state => state.user)

console.log('header :', user)
  
    return(
        <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <p>{user.firstName} {user.lastName}</p>
          <a className="main-nav-item" href="/sing-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    )
}

export default Header