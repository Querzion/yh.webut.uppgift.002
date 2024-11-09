import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import SiliconLogo from "../../../assets/images/mainpage-light/navbar/silicon-logo.svg";
import DarkMode from '../../../components/DarkMode/DarkMode';
import Menu from '../../../components/Menu/Menu';

// DarkMode had some problems, so the useEffect and links. is a ChatGPT exchange.

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const checkDarkMode = () => {
            const body = document.body;
            setDarkMode(body.classList.contains('dark-mode'));
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="navbar" className="sticky-header">
            <div className="container">
                <Link id="logo" to="/">
                    <img id="logo-img" src={SiliconLogo} alt="Silicon Logotype" />
                    <img id="logo-text" alt="Text Silicon" />
                </Link>
                
                <nav id="main-menu" className="navbar">
                    <div className="nav-links">
                        <NavLink 
                            className={`nav-link ${darkMode ? 'dark-mode' : ''}`} 
                            to="/#features"
                        >
                            Features
                        </NavLink>
                        <NavLink 
                            className={`nav-link ${darkMode ? 'dark-mode' : ''}`} 
                            to="/Contact" 
                        >
                            Contact
                        </NavLink>
                    </div>
                </nav>
                
                <DarkMode />
                
                <Link id="auth-signin-create" to="#" className="btn-primary">
                    <i className="fa-regular fa-user" aria-hidden="true"></i>
                    <span>Sign in / up</span>
                </Link>
                
                <Menu />
                
            </div>
        </section>
    );
};

// document.addEventListener('scroll', function () {
//     const header = document.querySelector('.sticky-header');
//     if (window.scrollY > 50) {
//         console.log('Scrolled more than 50px');
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

export default Navbar
