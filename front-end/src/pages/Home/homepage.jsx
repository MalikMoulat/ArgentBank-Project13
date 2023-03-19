import React from 'react'
import './homepage.css'

import Header from '../../components/Header/header'
import Banner from '../../components/Banner/banner'
import FeatureItem from '../../components/FeatureItem/featureItem'
import Footer from '../../components/Footer/footer'

import chatIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

function HomePage(){
    return(
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <section className='features'>
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem

                        featureIcon={chatIcon}
                        featureTitle="You are our #1 priority"
                        featureText="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <FeatureItem
                        featureIcon={moneyIcon}
                        featureTitle="More savings means higher rates"
                        featureText="The more you save with us, the higher your interest rate will be!"
                    />                    
                    <FeatureItem

                        featureIcon={securityIcon}
                        featureTitle="Security you can trust"
                        featureText="We use top of the line encryption to make sure your data and money
                            is always safe."
                    />
                </section>
            </main>
            <Footer />
        </React.Fragment>

    )
}

export default HomePage