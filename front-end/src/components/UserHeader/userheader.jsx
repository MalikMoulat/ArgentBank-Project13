import React from "react"
import './userheader.css'

function UserHeader(){
    return(
        <div class="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button class="edit-button">Edit Name</button>
        </div>
    )
}

export default UserHeader