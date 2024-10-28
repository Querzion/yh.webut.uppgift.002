// DesktopCarousel.jsx
import React from 'react';
import CarouselContainer from '../CarouselContainer';

import imageBottom from "../../../assets/images/mainpage-light/carousel/desktop-bottom.svg";
import imageLeft from "../../../assets/images/mainpage-light/carousel/desktop-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/desktop-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/desktop-right.svg";

const ItemsDesktop = () => {
  const images = {
    type: 'desktop',
    left: imageLeft,
    middle: imageMiddle,
    right: imageRight,
    top: null, // No top layer for desktop
    bottom: imageBottom,
  };

  return <CarouselContainer images={images} />;
};

export default ItemsDesktop;
