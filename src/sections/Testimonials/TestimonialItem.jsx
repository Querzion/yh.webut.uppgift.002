import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom"

import iconQuote from "../../assets/images/mainpage-light/testimonials/icon-quote-light.svg"
import starRating4 from "../../assets/images/mainpage-light/testimonials/icon-rating4-light.svg"
import starRating5 from "../../assets/images/mainpage-light/testimonials/icon-rating5-light.svg"

const TestimonialItem = ({item}) => {
    const [rating, setRating] = useState("");

    // When I made this, it was just to solve the current situation, not to solve future events.
    useEffect(() => {
        if (item.starRating === 4) {
            setRating(starRating4);
        } else if (item.starRating === 5) {
            setRating(starRating5);
        }
    }, [item.starRating]);

    return (
        <div id={item.id} className="review-box">
            <img className="quote-icon" src={iconQuote} alt="quote icon" />
            <div className="quote-box">
                <img className="review-rating" src={rating} alt=" star rating" />
                <p>{item.comment}</p>
                <div className="review-info">
                    <img className="reviewer-avatar" src={item.avatarUrl} alt="avatar" />
                    <div className="reviewer">
                        <h3 className="mdt f700">{item.author}</h3>
                        <p className="smt">{item.jobRole}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem