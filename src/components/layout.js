import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import { Helmet } from "react-helmet"

import '../styles/global.scss'

const Layout = (props) => {
    return(
        <div>
            <Helmet>
                <title>Luca Tropea</title>
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout