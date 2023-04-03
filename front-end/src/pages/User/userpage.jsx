import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

import './userpage.css'

import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import UserHeader from "../../components/UserHeader/userheader"
import Account from "../../components/Account/account"

import { getUserData, getTokenUser } from "../../feature/reducer"

function UserPage() {

    //Ajouter connecte redux
    const user = useSelector(state => state.user)
    // console.log('USER PAGE :',user)

    const dispatch = useDispatch()
    const token = user.token
    const tokenStorage = window.localStorage.getItem('TOKEN')

    const [userData, setUserData] = useState()
    const [userToken, setUserToken] = useState()

    

    const fetchData = async ( token, setVar ) => {

        return axios({
            method: 'post',
            url: "http://localhost:3001/api/v1/user/profile",
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }).then(result => {
                console.log(result.data.body)

                dispatch(getUserData(result.data.body))
                setVar(result.data.body)
                
            }
        ).catch(error => { console.error(error); return Promise.reject(error); })
    }

    useEffect(() => {
        fetchData(tokenStorage, setUserData)
        dispatch(getTokenUser(tokenStorage))
    }, [])

    return(
        <React.Fragment>
            <Header />
            <main className="main bg-dark account-item-wrap">
                <UserHeader />
                <h2 className="sr-only">Accounts</h2>
                <Account
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmont="$2,082,79"
                    accountDescription="Available Balance"
                />
                <Account
                    accountTitle="Argent Bank Checking (x6712)"
                    accountAmont="$10,928.42"
                    accountDescription="Available Balance"
                />
                <Account
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmont="$184.30"
                    accountDescription="Current Balance"
                />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default UserPage