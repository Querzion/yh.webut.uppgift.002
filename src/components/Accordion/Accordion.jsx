// Accordion.jsx

import React from 'react';

const Accordion = ({ question, answer, id, isOpen, toggleAccordion }) => {
    return (
        <div className="box-box">
            <button id={id} className="faq-accordion" onClick={toggleAccordion}>
                <label className="question">{question}</label>
                <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={`faq-panel ${isOpen ? 'active' : 'inactive'}`}>
                <p className="answer">{answer}</p>
            </div>
        </div>
    );
};

export default Accordion;