import React, { useState } from 'react';
import '../Styling/Testimonials.css';

const Testimonials = () => {
    const [isOpen, setIsOpen] = useState(false);

    const testimonials = [
        {
            id: 1,
            author: 'Astroboy',
            message: 'FarGate made my intergalactic journey smooth and unforgettable. The views from space were breathtaking!',
            country: 'Japan'
        },
        {
            id: 2,
            author: 'Captain Kirk',
            message: 'FarGate is the future of space travel. Boldly went where no man has gone before!',
            country: 'United States'
        }
    ];

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <button className="toggle-button" onClick={toggleOpen}>{isOpen ? 'Hide Testimonials' : 'Show Testimonials'}</button>
            {isOpen && (
                <div className="content">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial">
                            <p>{testimonial.message}</p>
                            <p>- {testimonial.author}, {testimonial.country}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Testimonials;
