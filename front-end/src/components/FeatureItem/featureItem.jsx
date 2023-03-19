import React from 'react'
import './featureItem.css'

function FeatureItem({ featureIcon, featureTitle, featureText }){
    return(
        <div className="feature-item">
        <img src={featureIcon} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{featureTitle}</h3>
        <p>{featureText}</p>
      </div>
    )
}

export default FeatureItem