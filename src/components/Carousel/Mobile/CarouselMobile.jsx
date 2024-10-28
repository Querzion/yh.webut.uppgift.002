import React, { useEffect, useState, useRef } from 'react';
import mobileContent from './DataMobile'; // Import the mobile content

const CarouselMobile = () => {
    const slideLayerRef = useRef(null);
    const minIndex = -1;
    const maxIndex = 1;
    const slideTimer = 5000;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [heading, setHeading] = useState(mobileContent[1].heading);
    const [text, setText] = useState(mobileContent[1].text);

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
        const autoSwitch = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 > maxIndex ? minIndex : prevIndex + 1
            );
        }, slideTimer);

        return () => clearInterval(autoSwitch);
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
        <div className="carousel-mobile">
            <div
                id="c-slide-layer"
                ref={slideLayerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {mobileContent.map((content, index) => (
                    <div key={index} className="carousel-item">
                        <h3 className="carousel-heading">{content.heading}</h3>
                        <p className="carousel-text">{content.text}</p>
                    </div>
                ))}
            </div>
            <div className="carousel-content">
                <h3 className="carousel-heading">{heading}</h3>
                <p className="carousel-text">{text}</p>
            </div>
        </div>
    );
};

export default CarouselMobile;
