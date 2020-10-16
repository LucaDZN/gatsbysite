import React from 'react'
import Header from './header.js'
import Footer from './footer.js'

import './global.scss'

const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout