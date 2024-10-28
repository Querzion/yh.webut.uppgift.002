// TabletCarousel.jsx
import React from 'react';
import CarouselContainer from './CarouselContainer';
import mobileTop from "../../assets/images/mainpage-light/carousel/mobile-layer_1.svg"; // Mobile top image
import mobileBottom from "../../assets/images/mainpage-light/carousel/mobile-layer_3.svg"; // Mobile bottom image
import tabletLeft from "../../assets/images/mainpage-light/carousel/tablet-layer_2-1.svg";
import tabletMiddle from "../../assets/images/mainpage-light/carousel/tablet-layer_2-2.svg";
import tabletRight from "../../assets/images/mainpage-light/carousel/tablet-layer_2-3.svg";

const ItemsTablet = () => {
  const images = {
    type: 'tablet',
    top: mobileTop, // Use mobile top image for tablet
    left: tabletLeft,
    middle: tabletMiddle,
    right: tabletRight,
    bottom: mobileBottom, // Use mobile bottom image for tablet
  };

  const text = {
    heading: "Tablet Carousel Heading",
    description: "Description for the tablet carousel.",
  };

  return <CarouselContainer images={images} text={text} />;
};

export default ItemsTablet;
