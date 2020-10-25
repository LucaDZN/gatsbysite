import React from 'react'
import { Link } from 'gatsby'

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
    return (
        <header>
            <div className="container mx-auto ease-in">
                <div className="row">
                    <div className="inline-block">
                        <p className="logo">Luca Tropea</p>
                    </div>
                    <div className="inline-block float-right">
                    <AniLink paintDrip hex="#8a2c4c" to="/">
                        Home
                    </AniLink>
                    <AniLink paintDrip hex="#8a2c4c" to="/portfolio">
                        Portfolio
                    </AniLink>
                    <AniLink paintDrip hex="#8a2c4c" to="/contact">
                        Contact
                    </AniLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header