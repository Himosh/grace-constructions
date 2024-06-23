import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
    const [active, setActive] = useState('');

    const handleClick = (item) => {
        setActive(item);
    };

    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="nav-links">
                <a href="/" className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</a>
                <a href="/about" className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>About</a>
                <a href="/career" className={active === 'career' ? 'active' : ''} onClick={() => handleClick('career')}>Career</a>
                <a href="/contact" className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Contact</a>
            </div>
            <button type="button">Get a quote</button>
        </div>
    );
};

export default Navbar;

/*

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('');

    const handleClick = (item) => {
        setActive(item);
    };

    return (
        <nav className="navbar">
            <ul>
                <li
                    className={active === 'home' ? 'active' : ''}
                    onClick={() => handleClick('home')}
                >
                    Home
                </li>
                <li
                    className={active === 'about' ? 'active' : ''}
                    onClick={() => handleClick('about')}
                >
                    About
                </li>
                <li
                    className={active === 'services' ? 'active' : ''}
                    onClick={() => handleClick('services')}
                >
                    Services
                </li>
                <li
                    className={active === 'contact' ? 'active' : ''}
                    onClick={() => handleClick('contact')}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

*/