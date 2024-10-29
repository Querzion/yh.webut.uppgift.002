import React from 'react'
import { Link } from "react-router-dom";

import appleAppStore from "/src/assets/images/mainpage-light/showcase/appstore-light.svg"
import googlePlayStore from "/src/assets/images/mainpage-light/showcase/googleplay-light.svg"

import backPic from "/src/assets/images/mainpage-light/showcase/iphone-mybudget-back.svg"
import frontPic from "/src/assets/images/mainpage-light/showcase/iphone-mycards-front.svg"


const Showcase = () => {
  return (
    <section id="showcase" className="first-section bg-gradient" aria-label="Showcase section">
                
      <div className="showcase">
          <div className="container rectifier">
          
                <div className="sc-headline">
                    <h1 className="d4 f800">Manage all Your<br/>Money in One App</h1>
                </div>
            
                <div className="sc-content">
                    <p id="sc-text">
                        We offer you a new generation of the mobile banking. <span className="tablet-line-break"><br/></span> Save, spend & manage money in your pocket.
                    </p>
                    <div className="buttons">
                        <a className="btn-download-app" href="https://www.apple.com/app-store/" target="_blank"><img id="appstore" src={appleAppStore} alt="appstore" /></a>
                        <a className="btn-download-app" href="https://play.google.com/store/" target="_blank"><img id="playstore" src={googlePlayStore} alt="playstore" /></a>
                    </div>
                    <Link to="/#brands" className="discover-more">
                        <span className="btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                        <span className="changecolordamnit">Discover more</span>
                    </Link>
                </div>
          
                <div className="images">
                    <img className="img-back" src={backPic} loading="lazy" alt="iphone my budget" />
                    <img className="img-front" src={frontPic} loading="lazy" alt="iphone my cards" />
                </div>
            </div>
      </div>

    </section>
  )
}

export default Showcase