import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

export const navBar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-logo">

                </div>

                <div className="navbar-menu">
                    <div className="navbar-menu-item">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/career">Career</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="navbar-button">
                    <button> Get a quote </button>
                </div>
            </div>
        </nav>
    )
}
