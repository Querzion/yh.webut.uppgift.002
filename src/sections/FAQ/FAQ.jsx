// FAQ.jsx

import React, { useContext, useEffect, useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import iconPhone from "../../assets/images/mainpage-light/faq/icon-phone-light.svg";
import iconBubble from "../../assets/images/mainpage-light/faq/icon-bubble-light.svg";

import { DataContext } from '../../contexts/DataProvider';

const FAQ = () => {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordionId(prevId => (prevId === id ? null : id));
    };

    const { data, fetchData} = useContext(DataContext);

    useEffect(() => {
        fetchData('faq');
    }, [fetchData])

    // const faqs = [
    //     { 
    //         id: "a1", 
    //         question: "Is any of my personal information stored in the app?", 
    //         answer: "Lorem ipsum..." 
    //     },
    //     { 
    //         id: "a2", 
    //         question: "What formats can I download my transaction history in?", 
    //         answer: "Lorem ipsum..." 
    //     },
    //     { 
    //         id: "a3", 
    //         question: "Can I schedule future transfers?", 
    //         answer: "Lorem ipsum..." 
    //     },
    //     { 
    //         id: "a4", 
    //         question: "When can I use Banking App services?", 
    //         answer: "Lorem ipsum..." 
    //     },
    //     { 
    //         id: "a5", 
    //         question: "Can I create my own password that is easy for me to remember?", 
    //         answer: "Lorem ipsum..." 
    //     },
    //     { 
    //         id: "a6", 
    //         question: "What happens if I forget or lose my password?", 
    //         answer: "Lorem ipsum..." 
    //     },
    // ];



    return (
        <section id="faq" className="mt-4" aria-label="Frequently asked questions">
            <div className="container faq-container">
                <div className="faq-heading-field">
                    <div className="faq-heading-text">
                        <h2>Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                    </div>
                </div>
                <div className="faq-accordion-box">
                    {data.map(faq => (
                        <Accordion
                            key={faq.id}
                            id={faq.id}
                            question={faq.title}
                            answer={faq.content}
                            isOpen={openAccordionId === faq.id}
                            toggleAccordion={() => toggleAccordion(faq.id)}
                        />
                    ))}
                </div>

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