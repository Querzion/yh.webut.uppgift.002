import React, {useContext} from 'react'
import { ValidationContext } from '../../contexts/ValidationProvider'

import iconMailGray from "../../assets/images/mainpage-light/subscribe/icon-mail-light.svg"

const SubscribeForm = () => {
    const { handleInputChange, handleSubmit, formData, errors } = useContext(ValidationContext)

    return (
        <form id="subscriptionForm" onSubmit={handleSubmit} noValidate>
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
    )
}

export default SubscribeForm