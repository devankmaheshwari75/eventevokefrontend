import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Navbar.css"; 

import logo from "../../assets/Logo2.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img className="logoimage" src={logo} alt="" />
                    </Link>
                </div>
                <div className="middle1">
                    <ul className='middle'>
                        <li><Link to="/services" className="nav-link" onClick={closeMenu}>SERVICES</Link></li>
                        <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>GALLERY</Link></li>
                        <li><Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT</Link></li>
                    </ul>
                </div>
                <div className="right1">
                    <ul className='rightbar'>
                        
                        <li><Link to="/contact" className="nav-button" onClick={closeMenu}>GET STARTED</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
