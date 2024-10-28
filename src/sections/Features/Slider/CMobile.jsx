import React, { useEffect, useState, useRef } from 'react';

// Import images
import mobileTop from "../../../assets/images/mainpage-light/carousel/top.svg";
import mobileBottom from "../../../assets/images/mainpage-light/carousel/bottom.svg";
import mobileLeft from "../../../assets/images/mainpage-light/carousel/mobile-left.svg";
import mobileMiddle from "../../../assets/images/mainpage-light/carousel/mobile-middle.svg";
import mobileRight from "../../../assets/images/mainpage-light/carousel/mobile-right.svg";

// Define mobile content
const mobileContent = [
    {
        heading: 'Latest transaction history',
        text: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.'
    },
    {
        heading: 'Transfers to people from your contact list',
        text: 'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.'
    },
    {
        heading: 'Transfer money to people',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi ipsum cumque illum veritatis. Doloribus!'
    }
];

const CMobile = () => {
    const slideLayerRef = useRef(null);
    const startX = useRef(0);
    const startY = useRef(0);
    const endX = useRef(0);
    const endY = useRef(0);
    const autoSwitch = useRef(null);

    const minIndex = -1;
    const maxIndex = 1;
    const slideTimer = 5000;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [heading, setHeading] = useState(mobileContent[1].heading);
    const [text, setText] = useState(mobileContent[1].text);

    // Update the carousel's visual and content
    const updateCarousel = () => {
        const offset = currentIndex * -100;
        if (slideLayerRef.current) {
            slideLayerRef.current.style.transform = `translateX(${offset}%)`;
        }
        const contentIndex = currentIndex + 1;
        setHeading(mobileContent[contentIndex].heading);
        setText(mobileContent[contentIndex].text);
    };

    useEffect(() => {
        // Auto-switch functionality
        autoSwitch.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 > maxIndex ? minIndex : prevIndex + 1
            );
        }, slideTimer);

        return () => clearInterval(autoSwitch.current);
    }, []);

    useEffect(() => {
        updateCarousel();
    }, [currentIndex]);

    const handleTouchStart = (event) => {
        startX.current = event.touches[0].clientX;
        startY.current = event.touches[0].clientY;
        clearInterval(autoSwitch.current);
    };

    const handleTouchMove = (event) => {
        endX.current = event.touches[0].clientX;
        endY.current = event.touches[0].clientY;
        const diffX = Math.abs(startX.current - endX.current);
        const diffY = Math.abs(startY.current - endY.current);
        if (diffX > diffY) {
            event.preventDefault();
        }
    };

    const handleTouchEnd = () => {
        const diffX = startX.current - endX.current;
        const diffY = startY.current - endY.current;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            setCurrentIndex((prevIndex) => {
                if (diffX > 50) {
                    return prevIndex + 1 > maxIndex ? minIndex : prevIndex + 1;
                } else if (diffX < -50) {
                    return prevIndex - 1 < minIndex ? maxIndex : prevIndex - 1;
                }
                return prevIndex;
            });
        }

        autoSwitch.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 > maxIndex ? minIndex : prevIndex + 1
            );
        }, slideTimer);
    };

    return (
        <section className="mobile-carousel pb-1">
            <div className="carousel-wrapper">
                <div className="carousel-grid">
                    <div className="c-layers c-top-layer">
                        <img src={mobileTop} loading="lazy" alt="iphone-top-layer" className="outer-layers layer-1" aria-hidden="true" />
                    </div>
                    <div id="c-slide-layer" ref={slideLayerRef} className="c-middle-layer" draggable="true"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
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
                        <img src={mobileBottom} loading="lazy" alt="black" className="outer-layers layer-3" aria-hidden="true" />
                    </div>
                    <div className="mobile-text-container">
                        <h3 className="mt-1 mb-1 h5 f600 carousel-heading">{heading}</h3>
                        <p className="carousel-text">{text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CMobile;
