import React, { createContext, useState } from "react";

export const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
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
        subscribe: "",
        specialist: options[0].id, // Default to the first specialist
    });

    const [errors, setErrors] = useState({});

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

    const regularExpressionFullName = /^[A-Öa-ö\s\-]+[A-Öa-ö\s\-]{2,}$/;
    const regularExpressionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
    // const regularExpressionPhone = /^(\+46|0)[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{0,3}$/;

    const validateField = (name, value) => {
        let error = "";

        if (name === "fullName" && !regularExpressionFullName.test(value)) {
            error = "Your name must be at least 2 characters long, no numbers.";
        } else if (name === "email" && !regularExpressionEmail.test(value)) {
            error = "It has to be a valid email address. (eg. username@example.com)";
        } else if (name === "subscribe" && !regularExpressionEmail.test(value)) {
            error = "It has to be a valid email address. (eg. username@example.com)";
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const validateForm = () => {
    const newErrors = {};

    if (!regularExpressionFullName.test(formData.fullName)) {
        newErrors.fullName = "Your name must be at least 2 characters long, no numbers.";
    }

    if (!regularExpressionEmail.test(formData.email)) {
        newErrors.email = "It has to be a valid email address. (eg. username@example.com)";
    }

    if (!regularExpressionEmail.test(formData.subscribe)) {
        newErrors.subscribe = "It has to be a valid email address. (eg. username@example.com)";
    }

    setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    // ChatGPT intervention on the validateForm .then / .catch
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form is valid");

            if (e.target.id === "sub-scribe") {
            fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: formData.subscribe }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Subscribe form submitted successfully:", data);
                })
                .catch((error) => {
                    console.error("Error submitting subscribe form:", error);
                });
            } else if (e.target.id === "consultation-form") {
            fetch("https://win24-assignment.azurewebsites.net/api/forms/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                name: formData.fullName,
                email: formData.email,
                specialist: formData.specialist,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Contact form submitted successfully:", data);
                })
                .catch((error) => {
                    console.error("Error submitting contact form:", error);
                });
            }
        } else {
            console.log("Form is invalid");
        }
    };

    return (
    <ValidationContext.Provider
        value={{
        handleInputChange,
        handleSubmit,
        formData,
        errors,
        options, // Add options to the context value
        }}
    >
        {children}
    </ValidationContext.Provider>
    );
};

export default ValidationProvider;  