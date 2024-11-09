import React, { useState, useEffect} from 'react'
import FAQListItem from './FAQListItem'

const FAQList = () => {
    const [faqItems, setFaqItems] = useState([])
    const [openAccordionId, setOpenAccordionId] = useState(null);
    
    const fetchData = async () => {
        const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq")
        const data = await res.json()
        
        setFaqItems(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    const toggleAccordion = (id) => {
        setOpenAccordionId(prevId => (prevId === id ? null : id));
    };
    
    return (
        <div className="faq-accordion-box">
            {
                faqItems.map((item) => (<FAQListItem key={item.id} faq={item} isOpen={openAccordionId === item.id} toggleAccordion={() => toggleAccordion(item.id)} />)) 
            }
            
            {/* {
                faqItems.map(faq => (<FAQListItem 
                    key={faq.id} 
                    id={faq.id}
                    question={faq.title} 
                    answer={faq.content}
                    isOpen={openAccordionId === faq.id}
                    toggleAccordion={() => toggleAccordion(faq.id)}
                />
            ))} */}
        </div>
    )
}

export default FAQList