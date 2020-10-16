import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="logo">Luca Tropea</p>
                    </div>
                    <div className="col-md-6">
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