import React from 'react'

import SiliconLogo from "../../../assets/images/mainpage-light/navbar/silicon-logo.svg"
import DarkMode from '../../../components/DarkMode/DarkMode'

const Navbar = () => {

    return (
        <section id="navbar" className="sticky-header">

            <div className="container">
                <a id="logo" href="/index.html">
                    <img
                        id="logo-img"
                        src={SiliconLogo}
                        alt="Silicon Logotype"
                    />
                    <img
                        id="logo-text"
                        // src={SiliconLogoTextLight}
                        alt="Text Silicon"
                    />
                </a>
                
                <nav id="main-menu" className="navbar">
                    <a className="nav-link" href="#brands">Features</a>
                    <a className="nav-link" href="./contact.html">Contact</a>
                </nav>
                
                <DarkMode />
                
                <a id="auth-signin-create" href="#" className="btn-primary">
                    <i className="fa-regular fa-user" aria-hidden="true"></i>
                    <span>Sign in / up</span>
                </a>
                
                <button className="btn-mobile" title="Menu borked"  aria-label="menu button">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        
        </section>
    )
}

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
