import React from 'react';

const FAQListItem = ({ faq, isOpen, toggleAccordion }) => {
  return (
    <div className="box-box">
      <button id={faq.id} className="faq-accordion" onClick={toggleAccordion}>
        <label className="question">{faq.title}</label>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      <div className={`faq-panel ${isOpen ? 'active' : 'inactive'}`}>
        <p className="answer">{faq.content}</p>
      </div>
    </div>
  );
};

export default FAQListItem;