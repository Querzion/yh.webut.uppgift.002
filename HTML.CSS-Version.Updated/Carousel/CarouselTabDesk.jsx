import React, { useState, useEffect } from 'react';

// Carousel Data
const tabletHeadlines = [
  'Tablet Headline 1',
  'Tablet Headline 2',
  'Tablet Headline 3'
];
const tabletTexts = [
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sint fugiat sequi cupiditate. Adipisci soluta eaque qui excepturi maxime iste non dolor? Consectetur!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, blanditiis tenetur! Incidunt inventore corrupti ad! Deleniti sapiente ut aspernatur commodi?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet excepturi eum amet ad?'
];
const desktopHeadlines = [
  'Desktop Headline 1',
  'Desktop Headline 2',
  'Desktop Headline 3'
];
const desktopTexts = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore explicabo ipsum labore rerum quis voluptate numquam corporis impedit ea officia perspiciatis earum. Optio corporis officiis consequuntur sunt libero similique voluptatum.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto deleniti dolore rem facere eos!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolores voluptas velit ut consectetur consequuntur in, a alias?'
];

// Helper function to get the travel distance based on screen width
const getImageTravelDistance = () => {
  const viewWidth = window.innerWidth;
  return viewWidth <= 1399 ? 205 : 300;
};

const CarouselTabDesk = () => {
  const [tabletIndex, setTabletIndex] = useState(1);
  const [desktopIndex, setDesktopIndex] = useState(1);

  useEffect(() => {
    const resetTransform = (carouselType) => {
      const images = document.querySelectorAll(`.${carouselType}-carousel img`);
      images.forEach((image) => (image.style.transform = 'translateX(0)'));
    };

    resetTransform('tablet');
    resetTransform('desktop');
  }, [tabletIndex, desktopIndex]);

  const updateTextContent = (view, index) => {
    return {
      headline: view === 'tablet' ? tabletHeadlines[index] : desktopHeadlines[index],
      text: view === 'tablet' ? tabletTexts[index] : desktopTexts[index]
    };
  };

  const switchPositions = (view, index) => {
    const moveDistance = getImageTravelDistance();
    const images = document.querySelectorAll(`.${view}-carousel img`);

    images.forEach((image, idx) => {
      if (idx === 0 && index === 0) image.style.transform = `translateX(${moveDistance}px)`;
      else if (idx === 1 && index === 0) image.style.transform = `translateX(-${moveDistance}px)`;
      else if (idx === 2 && index === 2) image.style.transform = `translateX(-${moveDistance}px)`;
      else if (idx === 1 && index === 2) image.style.transform = `translateX(${moveDistance}px)`;
      else image.style.transform = 'translateX(0)';
    });

    if (view === 'tablet') setTabletIndex(index);
    else setDesktopIndex(index);
  };

  const { headline: tabletHeadline, text: tabletText } = updateTextContent('tablet', tabletIndex);
  const { headline: desktopHeadline, text: desktopText } = updateTextContent('desktop', desktopIndex);

  return (
    <div>
      <div className="tablet-carousel">
        <h2 className="carousel-heading">{tabletHeadline}</h2>
        <p className="carousel-text">{tabletText}</p>
        {['#t-1', '#t-2', '#t-3'].map((id, idx) => (
          <img
            key={id}
            id={id.slice(1)}
            src={`tablet-image-${idx + 1}.png`}
            alt={`Tablet Image ${idx + 1}`}
            onClick={() => switchPositions('tablet', idx)}
          />
        ))}
      </div>

      <div className="desktop-carousel">
        <h2 className="carousel-heading">{desktopHeadline}</h2>
        <p className="carousel-text">{desktopText}</p>
        {['#d-1', '#d-2', '#d-3'].map((id, idx) => (
          <img
            key={id}
            id={id.slice(1)}
            src={`desktop-image-${idx + 1}.png`}
            alt={`Desktop Image ${idx + 1}`}
            onClick={() => switchPositions('desktop', idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTabDesk;