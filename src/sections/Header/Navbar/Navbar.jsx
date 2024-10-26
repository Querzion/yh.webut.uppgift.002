import React from 'react'

import SiliconLogo from "../../../assets/images/mainpage-light/navbar/silicon-logo.svg"
import SiliconLogoText from "../../../assets/images/mainpage-light/navbar/silicon-text-light.svg"

const Navbar = () => {
  return (
    <section id="navbar" className="sticky-header">

      <a id="logo" href="/index.html">
          <img id="logo-img" src={SiliconLogo} alt="Silicon Logotype" />
          <img id="logo-text" src={SiliconLogoText} alt="Text Silicon" />
      </a>
      
      <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#brands">Features</a>
          <a className="nav-link" href="./contact.html">Contact</a>
      </nav>
      
      <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
              <input id="darkmode-switch" type="checkbox" aria-label="dark-mode input toggle" />
              <span className="slider round"></span>
          </label>
      </div>
      
      <a id="auth-signin-create" href="#" className="btn-primary">
          <i className="fa-regular fa-user" aria-hidden="true"></i>
          <span>Sign in / up</span>
      </a>
      
      <button className="btn-mobile" title="Menu borked"  aria-label="menu button">
          <i className="fa-solid fa-bars"></i>
      </button>
      
    </section>
  )
}

export default Navbar
