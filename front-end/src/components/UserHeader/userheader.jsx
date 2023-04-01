import { useSelector, connect, useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"


import { updateUserName } from "../../feature/reducer"

import React from "react"
import './userheader.css'

function UserHeader(){

    const user = useSelector(state => state.user)
    console.log(user)

    const dispatch = useDispatch()

    const [firstName, setfirstName] = useState()
    const [lastName, setLastName] = useState()


    const openModal = () => {
        const modal = document.getElementById('update_name_modal_wrapper')
        modal.style.display = 'block'
    }

    const closeModal = () => {
        const modal = document.getElementById('update_name_modal_wrapper')
        modal.style.display = 'none'
    }

    const updateName = (e) => {

        e.preventDefault()

        const newUserName = {
            "firstName": firstName,
            "lastName": lastName
            }

            dispatch(updateUserName(newUserName))

            axios({
            method: 'put',
            url: "http://localhost:3001/api/v1/user/profile",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
            data: newUserName
            }).then(result => {
                console.log(result)
    

                // if(result.data.body.token){
                //     console.log('TOKEN OK')
                //     // navigate('/user')
        
                // }else{
                //     console.log('NO TOKEN')
                // }
    
            }
            ).catch(error => { console.error(error); return Promise.reject(error); })

            closeModal()
            
    }

    return(
        <React.Fragment>
            <div className="header">
                <h1>Welcome back</h1>

                <div id="userName">
                    <h2>{user.firstName} {user.lastName}</h2>
                </div>
                <p>{user.token}</p>
                <button id="editName" className="edit-button" onClick={openModal} >Edit Name</button>
            </div>
            <div id="update_name_modal_wrapper" className="update_name_modal_wrapper" >
                <div id="update_name_modal" className="update_name_modal">
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="update_firstName" placeholder="First name" >First name</label>
                            <input 
                                type="text" 
                                id="update_firstName"
                                onChange={(e) => setfirstName(e.target.value)}
                            >    
                            </input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="update_lastName">Last name</label>
                            <input 
                                type="text" 
                                id="update_lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className="sign-in-button" onClick={updateName}
                                >Mettre à ajour mon nom</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserHeader