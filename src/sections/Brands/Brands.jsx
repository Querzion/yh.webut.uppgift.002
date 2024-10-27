import React from 'react'
import Brand1 from "/src/assets/images/mainpage-light/brands/brand-1.svg"
import Brand2 from "/src/assets/images/mainpage-light/brands/brand-2.svg"
import Brand3 from "/src/assets/images/mainpage-light/brands/brand-3.svg"
import Brand4 from "/src/assets/images/mainpage-light/brands/brand-4.svg"
import Brand5 from "/src/assets/images/mainpage-light/brands/brand-5.svg"
import Brand6 from "/src/assets/images/mainpage-light/brands/brand-6.svg"


const Brands = () => {
    return (
        <section id="brands">

            <div className="container">
                <div id="brand-1" className="brand-box">
                    <img src={Brand1} loading="lazy" alt="Brand Logo 1" />
                </div>
                <div id="brand-2" className="brand-box">
                    <img src={Brand2} loading="lazy" alt="Brand Logo 2" />
                </div>
                
                <div id="brand-3" className="brand-box">
                    <img src={Brand3} loading="lazy" alt="Brand Logo 3" />
                </div>
                
                <div id="brand-4" className="brand-box">
                    <img src={Brand4} loading="lazy" alt="Brand Logo 4" />
                </div>
                
                <div id="brand-5" className="brand-box">
                    <img src={Brand5} loading="lazy" alt="Brand Logo 5" />
                </div>
                
                <div id="brand-6" className="brand-box">
                    <img src={Brand6} loading="lazy" alt="Brand Logo 6" />
                </div>
            </div>

        </section>
    )
}

export default Brands
