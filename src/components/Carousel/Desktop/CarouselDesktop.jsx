import React, { useState, useEffect } from 'react';
import { desktopHeadlines, desktopTexts } from './DataDesktop'; // Import the desktop data

// Helper function to get the travel distance based on screen width
const getImageTravelDistance = () => {
    const viewWidth = window.innerWidth;
    return viewWidth <= 1399 ? 205 : 300;
};

const CarouselDesktop = () => {
    const [desktopIndex, setDesktopIndex] = useState(1);

    useEffect(() => {
        const resetTransform = () => {
            const images = document.querySelectorAll('.desktop-carousel img');
            images.forEach((image) => (image.style.transform = 'translateX(0)'));
        };
        resetTransform();
    }, [desktopIndex]);

    const switchPositions = (index) => {
        const moveDistance = getImageTravelDistance();
        const images = document.querySelectorAll('.desktop-carousel img');
        
        images.forEach((image, idx) => {
            if (idx === 0 && index === 0) {
                image.style.transform = `translateX(${moveDistance}px)`;
            } else if (idx === 1 && index === 0) {
                image.style.transform = `translateX(-${moveDistance}px)`;
            } else if (idx === 2 && index === 2) {
                image.style.transform = `translateX(-${moveDistance}px)`;
            } else if (idx === 1 && index === 2) {
                image.style.transform = `translateX(${moveDistance}px)`;
            } else {
                image.style.transform = 'translateX(0)';
            }
        });
        
        setDesktopIndex(index);
    };

    return (
        <div className="desktop-carousel">
            <h2 className="carousel-heading">{desktopHeadlines[desktopIndex]}</h2>
            <p className="carousel-text">{desktopTexts[desktopIndex]}</p>
            {['#d-1', '#d-2', '#d-3'].map((id, idx) => (
                <img
                    key={id}
                    id={id.slice(1)}
                    src={`desktop-image-${idx + 1}.png`}
                    alt={`Desktop Image ${idx + 1}`}
                    onClick={() => switchPositions(idx)}
                />
            ))}
        </div>
    );
};

export default CarouselDesktop;
