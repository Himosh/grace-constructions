
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3 className='logo'>Logo</h3>
            <ul className='nav-links'>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
                <Link to="/career" className='career'>
                    <li>Career</li>
                </Link>

            </ul>
            <div>
                <Link to="/contact" className='button'>
                    Get a quote
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
