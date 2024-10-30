import React from 'react'

const Email = () => {
    return (
        <div className="input-group">
            <label htmlFor="email" className="form-label"><i className="fa-solid fa-envelope"></i> E-mail</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email address here. . ." required />
            <p className="invalid-input">Error msg.</p>
        </div>
    )
}

export default Email