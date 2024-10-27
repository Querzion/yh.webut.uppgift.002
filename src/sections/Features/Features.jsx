import React from 'react'
import Slider from "./Slider/Slider"

import imageIphoneVisa from "/src/assets/images/mainpage-light/Features/phone-visa.svg"
import featurePayments from "/src/assets/images/mainpage-light/Features/payments.svg"
import featureSecurity from "/src/assets/images/mainpage-light/Features/security.svg"
import featureStatistics from "/src/assets/images/mainpage-light/Features/statistics.svg"
import featureSupport from "/src/assets/images/mainpage-light/Features/support.svg"
import featureHappy from "/src/assets/images/mainpage-light/Features/happy.svg"
import featureCashback from "/src/assets/images/mainpage-light/Features/cashback.svg"

import iconCheckMark from "/src/assets/images/mainpage-light/Features/icon-l-checkmark-light.svg"

import imageForecast from "/src/assets/images/mainpage-light/Features/f2-1-back.svg"
import imageSendTo from "/src/assets/images/mainpage-light/Features/f2-1-front.svg"
import imageContacts from "/src/assets/images/mainpage-light/Features/f2-2-back.svg"
import imageVisaCard from "/src/assets/images/mainpage-light/Features/f2-2-front.svg"



const Features = () => {
  return (
    <div>
        <section id="features" aria-label="Features section">
            <div className="container flexit">

                <img id="af-phone-image" src={imageIphoneVisa} loading="lazy" alt="iphone 12 pro" />

                <div className="af-text-box">
                    <div className="af-text-above">
                        <h2 className="h1 f800">App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin volutpat mollis egestas. Nam luctus facilisis ultrices. 
                            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </div>
                
                    <div className="af-text-below">

                        <div id="feature-1" className="features">
                
                            <div className="af-img-container">
                                <img id="af-payments" className="af-img" src={featurePayments} alt="payments icon" />
                            </div>
                
                            <div className="af-text-container">
                                <h3>Easy Payments</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        
                        <div id="feature-2" className="features">
                            <div className="af-img-container">
                                <img id="af-security" className="af-img" src={featureSecurity} alt="security icon" />
                            </div>
                
                            <div className="af-text-container">
                                <h3>Data Security</h3>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                            </div>
                        </div>
                        
                        <div id="feature-3" className="features">
                            <div className="af-img-container">
                                <img id="af-statistics" className="af-img" src={featureStatistics} alt="statistics icon" />
                            </div>
                
                            <div className="af-text-container">
                                <h3>Cost Statistics</h3>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                            </div>
                
                        </div>
                        
                        <div id="feature-4" className="features">
                            <div className="af-img-container">
                                <img id="af-support" className="af-img" src={featureSupport} alt="support icon" />
                            </div>
                
                            <div className="af-text-container">
                                <h3>Support 24/7</h3>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </div>
                        
                        <div id="feature-5" className="features">
                            <div className="af-img-container">
                                <img id="af-cashback" className="af-img" src={featureCashback} alt="cashback icon" />
                            </div>
                            <div className="af-text-container">
                                <h3>Regular Cashback</h3>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                            </div>
                        </div>
                        
                        <div id="feature-6" className="features">
                            <div className="af-img-container">
                                <img id="af-standards" className="af-img" src={featureHappy} alt="happy icon" />
                            </div>
                            <div className="af-text-container">
                                <h3>Top Standards</h3>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>

        <Slider />

        <section id="features-followup" aria-label="Features section continuation">
                    
            <div className="container sf-grid-wrap">
                <div className="sf-upper-box">
                    <div className="text-cluster-left">
                
                        <h2 id="sf-heading-1">Make your money transfer simple and clear</h2>
                
                        <div className="sf2-flexthis">
                            <img src={iconCheckMark} alt="checkmark" aria-hidden="true" />
                            <p>Banking transactions are free for you</p>
                        </div>
                
                        <div className="sf2-flexthis">
                            <img src={iconCheckMark} alt="checkmark" aria-hidden="true" />
                            <p>No monthly cash commission</p>
                        </div>
                
                        <div className="sf2-flexthis">
                            <img src={iconCheckMark} alt="checkmark" aria-hidden="true" />
                            <p>Manage payments and transactions online</p>
                        </div>

                        <button id="fs2-btn-1" className="btn btn-primary sf-direction">
                            <label htmlFor="fs2-btn-1">Learn more </label>
                            <i className="fa-solid fa-arrow-right icon"></i>
                        </button>

                    </div>
                
                    <div className="sf-image-box-right">
                        
                        <div className="right-img-back">
                            <img className="sf2-1" src={imageForecast} loading="lazy" alt="economic forecast" />
                        </div>
                        
                        <div className="right-img-front">
                            <img className="sf2-2 image-override" src={imageSendTo} loading="lazy" alt="send money to" />
                        </div>
                
                    </div>

                </div>
                
                <div className="sf-lower-box">
                
                    <div className="sf-image-box-left">
                        
                        <div className="left-img-back">
                            <img className="sf2-3" src={imageContacts} loading="lazy" alt="contacts" />
                        </div>
                        
                        <div className="left-img-front">
                            <img className="sf2-4"  src={imageVisaCard} loading="lazy" alt="visa card" />
                        </div>
                
                    </div>
                
                    <div className="text-cluster-right">
                        
                        <h2 id="sf-heading-2"> Receive payment from international bank details</h2>
                        
                        <div className="text-box-right">

                            <div className="sf-left-bunch">
                                <div className="sf2-img-container">
                                    <img src={featurePayments} alt="payment icon" />
                                </div>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>

                            <div className="sf-right-bunch">
                                <div className="sf2-img-container">
                                    <img src={featureCashback} alt="wallet icon" />
                                </div>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>

                        </div>

                        <button id="fs2-btn-2" className="btn btn-primary sf-direction">
                            <label htmlFor="fs2-btn-2">Learn more</label>
                            <i className="fa-solid fa-arrow-right icon"></i>
                        </button>

                    </div>

                </div>

            </div>

        </section>
    

    </div>
  )
}

export default Features
