import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div className="container mx-auto ease-in">
                <div className="row">
                    <div className="inline-block">
                        <p className="logo">Luca Tropea</p>
                    </div>
                    <div className="inline-block float-right">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header