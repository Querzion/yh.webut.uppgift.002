import React, { useState, useEffect } from 'react';

// Helper function to get the travel distance based on screen width
const getImageTravelDistance = () => {
  const viewWidth = window.innerWidth;
  return viewWidth <= 1399 ? 205 : 300; // Modify if needed based on device type
};

const Carousel = ({ headlines, texts, deviceType }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const resetTransform = () => {
      const images = document.querySelectorAll(`.${deviceType}-carousel img`);
      images.forEach((image) => (image.style.transform = 'translateX(0)'));
    };
    resetTransform();
  }, [index, deviceType]);

  const switchPositions = (newIndex) => {
    const moveDistance = getImageTravelDistance();
    const images = document.querySelectorAll(`.${deviceType}-carousel img`);
    
    images.forEach((image, idx) => {
      if (idx === 0 && newIndex === 0) {
        image.style.transform = `translateX(${moveDistance}px)`;
      } else if (idx === 1 && newIndex === 0) {
        image.style.transform = `translateX(-${moveDistance}px)`;
      } else if (idx === 2 && newIndex === 2) {
        image.style.transform = `translateX(-${moveDistance}px)`;
      } else if (idx === 1 && newIndex === 2) {
        image.style.transform = `translateX(${moveDistance}px)`;
      } else {
        image.style.transform = 'translateX(0)';
      }
    });

    setIndex(newIndex);
  };

  return (
    <div className={`${deviceType}-carousel`}>
      <h2 className="carousel-heading">{headlines[index]}</h2>
      <p className="carousel-text">{texts[index]}</p>
      {['#1', '#2', '#3'].map((id, idx) => (
        <img
          key={id}
          id={`${deviceType}-${id.slice(1)}`}
          src={`${deviceType}-image-${idx + 1}.png`}
          alt={`${deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} Image ${idx + 1}`}
          onClick={() => switchPositions(idx)}
        />
      ))}
    </div>
  );
};

export default Carousel;