import React, { useContext } from "react";
import { ValidationContext } from "../../contexts/ValidationProvider";

const ContactForm = () => {
  const { handleInputChange, handleSubmit, formData, errors, options } = useContext(ValidationContext);

  return (
    <form id="consultation-form" className="consultation-form" onSubmit={handleSubmit} noValidate>
      <h2 className="h2">Get Online Consultation</h2>

      <div className="input-group">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        {errors.fullName && <span className="validation-error">{errors.fullName}</span>}
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
        <div className="select-box">
          <select
            name="specialist"
            id="specialist"
            className="form-list"
            value={formData.specialist}
            onChange={handleInputChange}
            required
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>{option.text}</option>
            ))}
          </select>
        </div>
        {errors.specialist && <span className="validation-error">{errors.specialist}</span>}
      </div>

      <button id="submit-btn" type="submit" className="btn btn-primary">
        <span id="buttonText">Make an appointment</span>
      </button>
    </form>
  );
};

export default ContactForm;