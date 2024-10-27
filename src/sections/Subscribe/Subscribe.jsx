import React from 'react'

import imageNotification from "../../assets/images/mainpage-light/subscribe/notification.svg"
import iconMailGray from "../../assets/images/mainpage-light/subscribe/icon-mail-light.svg"

const Subscribe = () => {
    return (
        <section id="subscribe"  aria-label="subscribe section">

            <div className="container center sub-box">
                
                <div className="sub-info-box">
                    <img id="sub-image" src={imageNotification} alt="image 'notification'" />
                    <h2 id="img-text-md">Subscribe to our newsletter <span id="d-ext">to stay informed about the latest updates.</span></h2>                                    
                </div>
                
                <div className="sub-input-box">

                    <div className="sub-border">

                        <form id="sub-scribe">
                            <div className="input-field">
                                <img className="icon" src={iconMailGray} alt="" />
                                {/* <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values --> */}
                                <input type="email" id="email" className="email" placeholder="Your Email" autoComplete="off" />
                            </div>
                        </form>
                        
                        <div className="sub-btn">
                            <button id="sub-btn" className="btn btn-primary" aria-label="subscribe">
                                <label htmlFor="sub-btn">Subscribe</label>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Subscribe
