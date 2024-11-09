import React, {useContext} from 'react'
import { ValidationContext } from '../../contexts/ValidationProvider'

const ContactForm = () => {
    const { handleInputChange, handleSubmit, formData, errors } = useContext(ValidationContext)
    
    return (
        <form id="consultation-form" className="consultation-form">
            <h2 className="h2">Get Online Consultation</h2>

            <div className="input-group">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" id="fullName" className="form-input" required />
                <p className="invalid-input">Error msg.</p>
            </div>
                                                
            <div className="input-group">
                <label htmlFor="email" className="form-label">E-mail address</label>
                <input type="email" id="email" className="form-input" required />
                <p className="invalid-input">Error msg.</p>
            </div>
            
            <div className="input-group">
                <label htmlFor="specialist" className="form-label">Specialist</label>
                {/* <!-- https://www.youtube.com/watch?v=mmFrE0H0aXQ --> */}
                <div className="select-box">
                    <select name="specialist" id="specialist" className="form-list">
                        <option value=""></option>
                        <option value="">I don't know</option>
                        <option value="">What it's supposed to be here</option>
                        <option value="">Tell me.</option>
                    </select>
                </div>
                <p className="invalid-input">Error msg.</p>
            </div>

            <button id="submit-btn" type="submit" className="btn btn-primary">
                <span id="buttonText">Make an appointment</span>
            </button>
        </form>
    )
}

export default ContactForm