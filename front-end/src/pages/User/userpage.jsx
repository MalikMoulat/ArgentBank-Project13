import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './userpage.css'
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import UserHeader from "../../components/UserHeader/userheader"
import Account from "../../components/Account/account"
import { fetchData } from '../../actions/actions'

import { getTokenUser } from "../../feature/reducer"

function UserPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tokenStorage = window.localStorage.getItem('TOKEN')

    if (tokenStorage === null){
        navigate('/login')
    }

    useEffect(() => {
        fetchData(tokenStorage, dispatch)
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