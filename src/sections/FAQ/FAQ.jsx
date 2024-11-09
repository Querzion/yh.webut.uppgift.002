// FAQ.jsx

import React from 'react';
import iconPhone from "../../assets/images/mainpage-light/faq/icon-phone-light.svg";
import iconBubble from "../../assets/images/mainpage-light/faq/icon-bubble-light.svg";

import FAQList from './FAQList';

const FAQ = () => {
    return (
        <section id="faq" className="mt-4" aria-label="Frequently asked questions">
            <div className="container faq-container">
                <div className="faq-heading-field">
                    <div className="faq-heading-text">
                        <h2>Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                    </div>
                </div>
                
                <FAQList />

                <div className="faq-m-contact">
                    <button id="m-contact-btn" className="btn btn-primary" aria-label="contact us now">
                        <label htmlFor="m-contact-btn">Contact us now</label>
                    </button>
                </div>

                <div className="faq-t-contact">
                    <button id="call-us" className="call-us tplus-style" aria-label="call us">
                        <img src={iconPhone} alt="phone icon" />
                        <p>Still have questions?</p>
                        <div className="call-us-flex contact-us">
                            <label htmlFor="call-us">Contact us</label>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </button>
                    <button id="message-us" className="message-us tplus-style" aria-label="message us">
                        <img src={iconBubble} alt="phone icon" />
                        <p>Still have questions?</p>
                        <div className="message-us-flex contact-us">
                            <label htmlFor="message-us">Contact us</label>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;