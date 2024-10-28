import React from 'react'
import MainCarousel from '../../../components/Carousel/MainCarousel'

const Slider = () => {
    return (
        <section id="slider" aria-label="Carousel">
            <div className="container c-wrap">

                <div className="c-title">
                    <h2 className="h1 f800">How Does It Work?</h2>
                </div>
                
                <MainCarousel />
                
            </div>
        </section>
    )
}

export default Slider