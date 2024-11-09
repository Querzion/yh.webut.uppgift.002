import React, { useContext } from 'react'
import { ValidationContext } from '../../contexts/ValidationProvider'

import imageNotification from "../../assets/images/mainpage-light/subscribe/notification.svg"
import iconMailGray from "../../assets/images/mainpage-light/subscribe/icon-mail-light.svg"

const Subscribe = () => {
    const { handleInputChange, handleSubmit, formData, errors } = useContext(ValidationContext)

    return (
        <section id="subscribe"  aria-label="subscribe section">

            <div className="container center sub-box">
                
                <div className="sub-info-box">
                    <img id="sub-image" src={imageNotification} alt="image 'notification'" />
                    <h2 id="img-text-md">Subscribe to our newsletter <span id="d-ext">to stay informed about the latest updates.</span></h2>                                    
                </div>
                
                <div className="sub-input-box">

                    <div className="sub-border">

                        <form id="sub-scribe" onSubmit={handleSubmit} noValidate>
                            <div className="input-box">
                                
                                <div className="input-field">
                                    <img className="icon" src={iconMailGray} alt="" />
                                    {/* <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values --> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                
                                <div className="sub-btn">
                                    <button id="sub-btn" type="submit" className="btn btn-primary" aria-label="subscribe">
                                        <label htmlFor="sub-btn">Subscribe</label>
                                    </button>
                                </div>

                            </div>
                            {errors.email && <span className="validation-error">{errors.email}</span>}
                        </form>
                        
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Subscribe
