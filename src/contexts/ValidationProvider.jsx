import React, { createContext, useState } from 'react'

export const ValidationContext = createContext()

const ValidationProvider = ({children}) => {
    const [options, setOptions] = useState([{ id: 1, text: "Financial consulting" }, 
                                            { id: 2, text: "Risk management" }, 
                                            { id: 3, text: "Bonds & Commodities" },
                                            { id: 4, text: "Something"}])

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", category: options[0].id, })
    const [errors, setErrors] = useState({})


    // / = start and end of regular expression
    // ^ = start of active string
    // $ = end of active string
    // [] = boundary brackets of usable charactres
    // {,} = boundary of min, max amount of charactres
    // \s = wide spaces / space
    // \- = add -
    // + = and
    // @ = at and then domain
    // \. = force a dot
    // | = or
    // () = singular statement
    // \+46|0 = can start with +46 or 0
    // * = all of in prior boundary
    // \d = digits
    // \D = non digits

    const regularExpressionName = /^[A-Öa-ö\s\-]+[A-Öa-ö\s\-]{2,}$/;
    const regularExpressionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
    const regularExpressionPhone = /^(\+46|0)[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{0,3}$/;

    // Real-time validation function
    const validateField = (name, value) => {
        let error = '';

        if (name === 'name' && !regularExpressionName.test(value)) {
            error = "Your name must be at least 2 characters long, no numbers.";
        } else if (name === 'email' && !regularExpressionEmail.test(value)) {
            error = "It has to be a valid email address. (eg. username@example.com)";
        } else if (name === 'phone' && !regularExpressionPhone.test(value)) {
            error = "Has to be a valid Swedish phone-number.";
        }

        // Update errors state
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };


    // stated validation
    const validateForm = () => {
        const newErrors = {}


        if(!regularExpressionName.test(formData.name)) {
            newErrors.name = "Your name must be at least 2 characters long, no numbers."
        }

        if(!regularExpressionEmail.test(formData.email)) {
            newErrors.email = "It has to be a valid email address. (eg. username@example.com)"
        }

        if(!regularExpressionPhone.test(formData.phone)) {
            newErrors.phone = "Has to be a valid Swedish phone-number."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        validateField(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
        console.log("form valid")
        // fetch ('https://api.domain.com/api/forms/callback', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
        } else {
        console.log("form invalid")
        }
    }

    return (
        <ValidationContext.Provider value={{ handleInputChange, handleSubmit, formData, errors }}>
            {children} 
        </ValidationContext.Provider>
    )
}

export default ValidationProvider