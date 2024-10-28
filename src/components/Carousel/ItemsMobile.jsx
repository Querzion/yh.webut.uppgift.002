// MobileCarousel.jsx
import React from 'react';
import CarouselContainer from './CarouselContainer';
import mobileTop from "../../assets/images/mainpage-light/carousel/mobile-layer_1.svg";
import mobileBottom from "../../assets/images/mainpage-light/carousel/mobile-layer_3.svg";
import mobileLeft from "../../assets/images/mainpage-light/carousel/mobile-layer_2-1.svg";
import mobileMiddle from "../../assets/images/mainpage-light/carousel/mobile-layer_2-2.svg";
import mobileRight from "../../assets/images/mainpage-light/carousel/mobile-layer_2-3.svg";

const ItemsMobile = () => {
  const images = {
    type: 'mobile',
    top: mobileTop,
    left: mobileLeft,
    middle: mobileMiddle,
    right: mobileRight,
    bottom: mobileBottom,
  };

  const text = {
    heading: "Mobile Carousel Heading",
    description: "Description for the mobile carousel.",
  };

  return <CarouselContainer images={images} text={text} />;
};

export default ItemsMobile;
