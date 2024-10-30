import React from 'react'

const FullName = () => {
    return (
        <div className="input-group">
            <label htmlFor="fullName" className="form-label"><i className="fa-solid fa-id-card"></i> Full Name</label>
            <input type="text" id="fullName" className="form-input" placeholder="Enter your first name here. . ." required />
            <p className="invalid-input">Error msg.</p>
        </div>
    )
}

export default FullName