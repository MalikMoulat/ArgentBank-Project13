import { useSelector, connect } from "react-redux"

import React from "react"
import './userheader.css'

function UserHeader(){

    const user = useSelector(state => state.user)
    console.log(user)

    return(
        
        <div className="header">
            <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
            <p>{user.token}</p>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default UserHeader