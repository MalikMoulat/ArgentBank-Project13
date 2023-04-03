import React from 'react'
import './header.css'
import logo from '../../assets/img/argentBankLogo.png'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetState } from '../../feature/reducer'
import { useDispatch } from 'react-redux'


function Header() {

  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // console.log('header :', user)

  const signOut = () => {
    localStorage.clear()
    navigate("/sing-in")
    dispatch(resetState())
  }


  const userConnected = (data) => {
    if (data.length > 3){

      return  <React.Fragment>
                  <i className="fa fa-user-circle"></i>
                  <p className='nav-margin'>{user.firstName} {user.lastName}</p>
                  <a onClick={signOut}>
                  <i className="fa fa-right-from-bracket"></i>
                    Sign Out</a>
              </React.Fragment>
    } 
    return  <React.Fragment>
              <a className="main-nav-item" href="/sing-in">
              <i className="fa fa-user-circle"></i>
                Sign In
              </a>
            </React.Fragment>
  }

  
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
        <div className='main-nav-button' >
          {userConnected(user.id)}
        </div>
      </nav>
    )
}

export default Header