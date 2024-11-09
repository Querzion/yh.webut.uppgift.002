import React from 'react'
import "./contact.scss"

import iconHouse from "../../assets/images/contact-light/icon-l-home-light.svg"
import iconMail from "../../assets/images/contact-light/icon-l-mail-primary-light.svg"
import iconGroup from "../../assets/images/contact-light/icon-l-advancement-light.svg"
import iconGps from "../../assets/images/contact-light/icon-gps.svg"
import iconPhone from "../../assets/images/contact-light/icon-phone-call.svg"
import iconClock from "../../assets/images/contact-light/icon-time-five.svg"

import imgMap from "../../assets/images/contact-light/map.svg"
import ContactForm from '../../components/Forms/ContactForm'

const Contact = () => {
    return (
      <section id="contact" className="contact-section">
                  <div className="contact-bg pb-05">
                      <div className="container">
                          <div className="link-tree">
                              <img src={iconHouse} alt="icon house" />
                              <a href="/">Homepage</a>
                              <p>»</p>
                              <a href="/Contact" className="active-link">Contact</a>
                          </div>
                          <div className="contact-upper">
                              <div className="contact-info-upper">
                                  <div className="cards-box">
                                      <h1 className="d3 f800 mt-1 mb-2">Contact us</h1>
                                  
                                      <div className="cards">
                                          <div className="card">
                                              <div className="card-btn btn-circle">
                                                  <img src={iconMail} alt="icon mail" />
                                              </div>
                                              <div className="mt-1 card-info">
                                                  <h2 className="h5 f800 mb-1">Email us</h2>
                                                  <p>Please feel free to drom us a line. We will respond as soon as possible.</p>
                                                  <div className="semiBold-text">
                                                      <a href="#">Leave a message <i className="fa-solid fa-arrow-right"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="card">
                                              <div className="card-btn btn-circle">
                                                  <img src={iconGroup} alt="icon group" />
                                              </div>
                                              <div className="mt-1 card-info">
                                                  <h2 className="h5 f800 mb-1">Careers</h2>
                                                  <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                                  <div className="semiBold-text">
                                                      <a href="#">Send an application <i className="fa-solid fa-arrow-right"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <ContactForm />
                                  
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="container">
                      <div className="contact-lower">
                          <div className="map">
                              <img src={imgMap} loading="lazy" alt="static map" />
                          </div>
                          <div className="mt-1 cards">
                              <div className="card mb-2">
                                  <h2 className="lgt mb-1">Medical Center 1</h2>
                                  <div className="card-address">
                                      <img src={iconGps} alt="icon gps" />
                                      <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                  </div>
                                  <div className="card-number">
                                      <img src={iconPhone} alt="icon phone" />
                                      <p>(405) 555-0120</p>
                                  </div>
                                  <div className="card-open">
                                      <div className="time">
                                          <img src={iconClock} alt="icon clock" />
                                      </div>
                                      <div className="weekdays">
                                          <p><span>Mon-Fri:</span> 9:00-22:00 am</p>
                                          <p><span>Sat-Sun:</span> 9:00-20:00 am</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="card">
                                  <h2 className="lgt mb-1">Medical Center 2</h2>
                                  <div className="card-address">
                                      <img src={iconGps} alt="icon gps" />
                                      <p>2464 Royal Ln. Mesa, New Jersey 455463</p>
                                  </div>
                                  <div className="card-number">
                                      <img src={iconPhone} alt="icon phone" />
                                      <p>(406) 544-0123</p>
                                  </div>
                                  <div className="card-open">
                                      <div className="time">
                                          <img src={iconClock} alt="icon clock" />
                                      </div>
                                      <div className="weekdays">
                                          <p><span>Mon-Fri:</span> 9:00-22:00 am</p>
                                          <p><span>Sat-Sun:</span> 9:00-20:00 am</p>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="social-media-links">
                                  <a className="smaller" href="https://facebook.com" target="_blank" aria-label="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                  <a href="https://x.com" target="_blank" aria-label="x-twitter"><i className="fa-brands fa-x-twitter"></i></a>
                                  <a href="https://instagram.com" target="_blank" aria-label="instagram"><i className="fa-brands fa-instagram"></i></a>
                                  <a href="https://youtube.com" target="_blank" aria-label="youtube"><i className="fa-brands fa-youtube"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
    )
}

export default Contact