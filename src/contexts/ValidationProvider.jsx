import React, { createContext, useState } from "react";

export const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
    // Contact form - Specialist options list.
    const [options] = useState([
        { id: "", text: "" },
        { id: 1, text: "Financial consulting" },
        { id: 2, text: "Risk management" },
        { id: 3, text: "Bonds & Commodities" },
        { id: 4, text: "Something" },
    ]);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        specialist: options[0].id, // Default to the first specialist
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false)

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

    // Regular expressions for validation
    const regularExpressionFullName = /^[A-Öa-ö\s\-]+[A-Öa-ö\s\-]{2,}$/;
    const regularExpressionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
    // const regularExpressionPhone = /^(\+46|0)[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{0,3}$/;

    // Real-time validation function
    const validateField = (name, value) => {
        let error = "";

        if (name === "fullName" && !regularExpressionFullName.test(value)) {
            error = "Your name must be at least 2 characters long, no numbers.";
        } else if (name === "email" && !regularExpressionEmail.test(value)) {
            error = "It has to be a valid email address. (eg. username@example.com)";
        } else if (name === "specialist" && name === "") {
            error = "Please select a specialist.";
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };
    
    const validateSubscriptionForm = () => {
        const newErrors = {};

        if (!regularExpressionEmail.test(formData.email)) {
            newErrors.email = "It has to be a valid email address. (eg. username@example.com)";
        }

        setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
    }

    const validateConsultationForm = () => {
        const newErrors = {};

        if (!regularExpressionFullName.test(formData.fullName)) {
            newErrors.fullName = "Your name must be at least 2 characters long, no numbers.";
        }

        if (!regularExpressionEmail.test(formData.email)) {
            newErrors.email = "It has to be a valid email address. (eg. username@example.com)";
        }

        if (formData.specialist === "") {
            newErrors.specialist = "Please select a specialist.";
        }

        setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };
    
    const handleOk = () => {
        setSubmitted(false)
    }

    // ChatGPT intervention on the validateForm .then / .catch
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (e.target.id === "subscriptionForm") {
            
            if (validateSubscriptionForm()) {
                console.log("Subscribe form is valid");

                const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: formData.email })
                    
                });

                if (res.status === 200) {
                    console.log("Successfull submit.");
                    // alert("Subscription form was submitted successfully.");

                    // const data = await res.text()
                    // console.log(data);

                    setSubmitted(true);
                    setFormData({
                        fullName: "",
                        email: "",
                        specialist: options[0].id
                    })
                } 
                // else {
                //     console.log("Error.");
                //     alert("There was an error. Action aborted. Please, contact the support.");

                //     const data = await res.json()
                //     console.log(data);
                // }
                
            } else {
                console.log("Form is invalid");
            }
            
        } 
        
        if (e.target.id === "consultationForm") {
            
            if (validateConsultationForm()) {
                console.log("Consultation form is valid");

                const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        email: formData.email,
                        specialist: formData.specialist,
                    }),
                })

                if (res.status === 200) {
                    console.log("Successfull submit.");
                    // alert("Subscription form was submitted successfully.");

                    // const data = await res.text()
                    // console.log(data);

                    setSubmitted(true);
                    setFormData({
                        fullName: "",
                        email: "",
                        specialist: options[0].id
                    })
                } 
                // else {
                //     console.log("Error.");
                //     alert("There was an error. Action aborted. Please, contact the support.");

                //     const data = await res.json()
                //     console.log(data);
                // }

            } else {
                console.log("Form is invalid");
            }
        }
    };

    return (
        <ValidationContext.Provider
            value={{
            handleInputChange,
            handleSubmit,
            formData,
            errors,
            options,
            submitted,
            handleOk,
            }}
        >
            {children}
        </ValidationContext.Provider>
    );
};

export default ValidationProvider;  