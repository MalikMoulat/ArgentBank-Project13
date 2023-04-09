import { useSelector, connect, useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"


import { updateUserName } from "../../feature/reducer"

import { closeModal, openModal } from "../../actions/actions"

import React from "react"
import './userheader.css'

function UserHeader(){

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const [firstName, setfirstName] = useState()
    const [lastName, setLastName] = useState()

    //Gere l'affichage de la modal de changement de nom et prénom
    const [updateNameForm, setUpdateNameForm] = useState(false)


    const openModal = () => {
        setUpdateNameForm(true)
    }

    const closeModal = () => {
        setUpdateNameForm(false)
    }

    const updateName = (e) => {
        e.preventDefault()

        const newUserName = {
            "firstName": firstName,
            "lastName": lastName
            }

            axios({
            method: 'put',
            url: "http://localhost:3001/api/v1/user/profile",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
            data: newUserName
            }).then(result => {

                dispatch(updateUserName(newUserName))
    
            }
            ).catch(error => { console.error(error); return Promise.reject(error); })

            closeModal()  
    }



    return updateNameForm ? (
        <React.Fragment>
            <div id="update_name_modal" className="update_name_modal">
                <h1>Welcome back</h1>
                <form>
                    <div className="input-wrapper-name">
                        <div className="input-wrapper">
                            <label htmlFor="update_firstName" ></label>
                            <input 
                                type="text" 
                                id="update_firstName"
                                onChange={(e) => setfirstName(e.target.value)}
                                required
                                placeholder={user.firstName}
                                
                            >    
                            </input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="update_lastName"></label>
                            <input 
                                type="text" 
                                id="update_lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder={user.lastName}
                                
                            >
                            </input>
                        </div>
                    </div>
                    <div className="wrapper-button-updtae-name">
                        <button className="button-updtae-name" onClick={updateName}
                                >Save</button>
                        <button className="button-updtae-name" onClick={closeModal}
                                >Cancel</button>
                    </div>
                </form>
            </div>
        </React.Fragment>

    ) : (
        <React.Fragment>
        <div className="header">
            <h1>Welcome back</h1>

            <div id="userName">
                <h2>{user.firstName} {user.lastName}</h2>
            </div>
                <button id="editName" className="edit-button" onClick={openModal} >Edit Name</button>
            </div>
        </React.Fragment>
    )
}

export default UserHeader