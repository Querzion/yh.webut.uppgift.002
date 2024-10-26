import React from 'react'

import mobileTop from "../../../assets/images/mainpage-light/carousel/mobile-layer_1.svg"
import mobileBottom from "../../../assets/images/mainpage-light/carousel/mobile-layer_3.svg"
import mobileLeft from "../../../assets/images/mainpage-light/carousel/mobile-layer_2-1.svg"
import mobileMiddle from "../../../assets/images/mainpage-light/carousel/mobile-layer_2-2.svg"
import mobileRight from "../../../assets/images/mainpage-light/carousel/mobile-layer_2-3.svg"

import tabletLeft from "../../../assets/images/mainpage-light/carousel/tablet-layer_2-1.svg"
import tabletMiddle from "../../../assets/images/mainpage-light/carousel/tablet-layer_2-2.svg"
import tabletRight from "../../../assets/images/mainpage-light/carousel/tablet-layer_2-3.svg"

import desktopBottom from "../../../assets/images/mainpage-light/carousel/desktop-layer_3.svg"
import desktopLeft from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-1.svg"
import desktopMiddle from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-2.svg"
import desktopRight from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-3.svg"

const Slider = () => {
    return (
        <section id="slider" aria-label="Carousel">
            <div className="container c-wrap">

                <div className="c-title">
                    <h2 className="h1 f800">How Does It Work?</h2>
                </div>
                
                {/* <!-- Mobile Carousel - Completed. --> */}
                <section className="mobile-carousel">
                    
                    <div className="carousel-wrapper">
                        <div className="carousel-grid">
                            <div className="c-layers c-top-layer">
                                <img src={mobileTop} loading="lazy" alt="iphone-top-layer" className="outer-layers layer-1" aria-hidden="true" />
                            </div>
                            <div id="c-slide-layer" className="c-middle-layer" draggable="true">
                                <div className="c-layers left">
                                    <img src={mobileLeft} loading="lazy" alt="silicon image" className="inner-layers image-1" />
                                </div>
                                <div className="c-layers middle">
                                    <img src={mobileMiddle} loading="lazy" alt="silicon image" className="inner-layers image-2" />
                                </div>
                                <div className="c-layers right">
                                    <img src={mobileRight} loading="lazy" alt="silicon image" className="inner-layers image-3" />
                                </div>
                            </div>

                            <div className="c-layers c-bottom-layer">
                                <img src={mobileBottom} loading="lazy" alt="black" className="outer-layers layer-3 " aria-hidden="true" />
                            </div>

                            {/* <!-- carousel-mobile.js --> */}
                            <div className="mobile-text-container">
                                <h3 className="h4 f600"></h3>
                                <p className="carousel-text"></p>
                            </div>
                        </div>
                    </div>

                </section>
                
                {/* <!-- Tablet Carousel - In progress --> */}
                <section className="tablet-carousel">

                    <div className="carousel-wrapper">
                            
                        <div id="t-slide-box" className="slide-box" draggable="true">
                            <div className="slide-layers c-box-left">
                                <img id="t-1" src={tabletLeft} loading="lazy" alt="silicon image" className="slide-layer left" />
                            </div>
                            <div className="slide-layers c-box-middle">
                                <img id="t-2" src={tabletMiddle} loading="lazy" alt="silicon image" className="slide-layer middle" />
                            </div>
                            <div className="slide-layers c-box-right">
                                <img id="t-3" src={tabletRight} loading="lazy" alt="silicon image" className="slide-layer right" />
                            </div> 
                        </div>
                        
                        <div className="slide-bg t-shell-outline" aria-hidden="true">
                            <img id="t-shell-outline" src={mobileTop} loading="lazy" alt="iphone-top-layer" className="bottom-layer" />
                        </div>

                        <div className="slide-bg t-shell-bg" aria-hidden="true">
                            <img id="t-shell-bg" src={mobileBottom} loading="lazy" alt="slide background" className="bottom-layer" />
                        </div>

                        {/* <!-- carousel-t-dt.js --> */}
                        <div className="carousel-text-container">
                            <h3 className="carousel-heading"></h3>
                            <p className="carousel-text"></p>
                        </div>

                    </div>
                </section>
                
                {/* <!-- Desktop Carousel - In progress --> */}
                <section className="desktop-carousel">
                    <div className="carousel-wrapper">
                        
                            
                        <div id="d-slide-box" className="slide-box" draggable="true">
                            <div className="slide-layers c-box-left mask">
                                <img id="d-1" src={desktopLeft} loading="lazy" alt="silicon image" className="slide-layer left" />
                            </div>
                            <div className="slide-layers c-box-middle mask">
                                <img id="d-2" src={desktopMiddle} loading="lazy" alt="silicon image" className="slide-layer middle" />
                            </div>
                            <div className="slide-layers c-box-right mask">
                                <img id="d-3" src={desktopRight} loading="lazy" alt="silicon image" className="slide-layer right" />
                            </div>   
                        </div>
                        
                        <div className="slide-bg" aria-hidden="true">
                            <img id="d-shell" src={desktopBottom} loading="lazy" alt="iphone-shell" className="bottom-layer" />
                        </div>

                        {/* <!-- carousel-t-dt.js --> */}
                        <div className="carousel-text-container">
                            <h3 className="carousel-heading"></h3>
                            <p className="carousel-text"></p>
                        </div>
                        
                    </div>
                </section>

            </div>
        </section>
    )
}

export default Slider