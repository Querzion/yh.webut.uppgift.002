import React from 'react'
import TestimonialList from './TestimonialList'

const Testimonials = () => {
    return (
        <section id="testimonials" aria-label="Testimonails section">
            <div className="container">
                <div className="testimonials-box">
                    <h2>Clients are <br/>Loving Our App</h2>
                    <TestimonialList />
                </div>
            </div>

        </section>
    )
}

export default Testimonials