import React, {useContext} from 'react'
import { ValidationContext } from '../../contexts/ValidationProvider'

const ContactForm = () => {
    const { handleInputChange, handleSubmit, formData, errors } = useContext(ValidationContext)

    return (
        <form id="consultation-form" className="consultation-form" onSubmit={handleSubmit} noValidate>
            <h2 className="h2">Get Online Consultation</h2>

            <div className="input-group">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input 
                    type="text" 
                    id="fullName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange} 
                    className="form-input" 
                    required 
                />
                {errors.name && <span className="validation-error">{errors.name}</span>}
            </div>
                                                
            <div className="input-group">
                <label htmlFor="email" className="form-label">E-mail address</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    className="form-input" 
                    required 
                />
                {errors.email && <span className="validation-error">{errors.email}</span>}
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
                {errors.specialist && <span className="validation-error">{errors.specialist}</span>}
            </div>

            <button id="submit-btn" type="submit" className="btn btn-primary">
                <span id="buttonText">Make an appointment</span>
            </button>
        </form>
    )
}

export default ContactForm