// DesktopCarousel.jsx
import React from 'react';
import CarouselContainer from './CarouselContainer';
import desktopBottom from "../../../assets/images/mainpage-light/carousel/desktop-layer_3.svg";
import desktopLeft from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-1.svg";
import desktopMiddle from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-2.svg";
import desktopRight from "../../../assets/images/mainpage-light/carousel/desktop-layer_2-3.svg";

const ItemsDesktop = () => {
  const images = {
    type: 'desktop',
    left: desktopLeft,
    middle: desktopMiddle,
    right: desktopRight,
    top: null, // No top layer for desktop
    bottom: desktopBottom,
  };

  const text = {
    heading: "Desktop Carousel Heading",
    description: "Description for the desktop carousel.",
  };

  return <CarouselContainer images={images} text={text} />;
};

export default ItemsDesktop;
