
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import logo from '../../Assets/GraceLogo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className='logo' src={logo} alt="Grace Construction Logo" />
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
