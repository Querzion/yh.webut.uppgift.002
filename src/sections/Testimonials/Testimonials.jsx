import React from 'react'

import avatarWoman from "../../assets/images/mainpage-light/testimonials/woman.svg"
import avatarMan from "../../assets/images/mainpage-light/testimonials/man.svg"
import iconQuote from "../../assets/images/mainpage-light/testimonials/icon-quote-light.svg"
import ratingFour from "../../assets/images/mainpage-light/testimonials/icon-rating4-light.svg"
import ratingFive from "../../assets/images/mainpage-light/testimonials/icon-rating5-light.svg"

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="Testimonails section">
        <div className="container">
            <div className="testimonials-box">
                <h2>Clients are <br/>Loving Our App</h2>
                <div className="reviews">
                    <div className="review-box">
                        <img className="quote-icon" src={iconQuote} alt="quote icon" />
                        <div className="quote-box">
                            <img className="review-rating" src={ratingFour} alt="four out of five star rating" />
                            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                            <div className="review-info">
                                <img className="reviewer-avatar" src={avatarWoman} alt="female avatar" />
                                <div className="reviewer">
                                    <h3 className="mdt f700">Fannie Summers</h3>
                                    <p className="smt">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-box">
                        <img className="quote-icon" src={iconQuote} alt="quote icon" />
                        <div className="quote-box">
                            <img className="review-rating" src={ratingFive} alt="five out of five star rating" />
                            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                            <div className="review-info">
                                <img className="reviewer-avatar" src={avatarMan} alt="male avatar" />
                                <div className="reviewer">
                                    <h3 className="mdt f700">Albert Flores</h3>
                                    <p className="smt">Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Testimonials