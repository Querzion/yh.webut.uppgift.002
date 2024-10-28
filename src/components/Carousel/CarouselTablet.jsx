import React, { useState, useEffect } from 'react';
import { tabletHeadlines, tabletTexts } from './DataTablet'; // Import the tablet data

// Helper function to get the travel distance based on screen width
const getImageTravelDistance = () => {
  const viewWidth = window.innerWidth;
  return viewWidth <= 1399 ? 205 : 300;
};

const CarouselTablet = () => {
  const [tabletIndex, setTabletIndex] = useState(1);

  useEffect(() => {
    const resetTransform = () => {
      const images = document.querySelectorAll('.tablet-carousel img');
      images.forEach((image) => (image.style.transform = 'translateX(0)'));
    };
    resetTransform();
  }, [tabletIndex]);

  const switchPositions = (index) => {
    const moveDistance = getImageTravelDistance();
    const images = document.querySelectorAll('.tablet-carousel img');
    
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
    
    setTabletIndex(index);
  };

  return (
    <div className="tablet-carousel">
      <h2 className="carousel-heading">{tabletHeadlines[tabletIndex]}</h2>
      <p className="carousel-text">{tabletTexts[tabletIndex]}</p>
      {['#t-1', '#t-2', '#t-3'].map((id, idx) => (
        <img
          key={id}
          id={id.slice(1)}
          src={`tablet-image-${idx + 1}.png`}
          alt={`Tablet Image ${idx + 1}`}
          onClick={() => switchPositions(idx)}
        />
      ))}
    </div>
  );
};

export default CarouselTablet;
