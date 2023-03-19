import React from "react"
import './account.css'
import PropTypes from "prop-types"

function Account({ accountTitle, accountAmont, accountDescription }){
    return(
        <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">{accountTitle}</h3>
          <p class="account-amount">{accountAmont}</p>
          <p class="account-amount-description">{accountDescription}</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    )
}

export default Account