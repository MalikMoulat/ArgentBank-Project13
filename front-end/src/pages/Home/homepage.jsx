import React from 'react'
import './homepage.css'

import Header from '../../components/Header/header'
import Banner from '../../components/Banner/banner'
import FeatureItem from '../../components/FeatureItem/featureItem'
import Footer from '../../components/Footer/footer'

function HomePage(){
    return(
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <section className='features'>
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                </section>
            </main>
            <Footer />
        </React.Fragment>

    )
}

export default HomePage