import React, { useState } from 'react';
import '../Styling/FAQ.css';

const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const faqs = [
        {
            id: 1,
            question: 'Is space travel safe?',
            answer: 'Safety is our top priority at FarGate. We adhere to strict safety protocols and regulations set by space agencies to ensure the safety of our passengers.'
        },
        {
            id: 2,
            question: 'How much does it cost to travel to space?',
            answer: 'The cost of space travel varies depending on factors such as destination, duration, and type of experience. Contact our customer service for more information.'
        },
        {
            id: 3,
            question: 'What do I need to bring for my space journey?',
            answer: 'We provide all necessary equipment and gear for your space journey. However, it is recommended to pack essentials such as comfortable clothing, medications, and personal items.'
        },
        {
            id: 4,
            question: 'How long does a space journey last?',
            answer: 'The duration of a space journey varies depending on the destination and type of experience. Short orbital flights may last a few hours, while trips to other planets may take several days or weeks.'
        },
        {
            id: 5,
            question: 'Can I book a space journey for a group?',
            answer: 'Yes, we offer group bookings for space journeys. Contact our group booking department for special rates and arrangements.'
        }
    ];

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faqs">
            <h2>Frequently Asked Questions</h2>
            <button className="toggle-button" onClick={toggleOpen}>{isOpen ? 'Hide FAQs' : 'Show FAQs'}</button>
            {isOpen && (
                <div className="content">
                    {faqs.map(faq => (
                        <div key={faq.id} className="faq">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FAQs;
