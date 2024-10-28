// ItemsCarousel.jsx
import React from 'react';
import CarouselContainer from '../../CarouselContainer';

import imageTop from "../../../assets/images/mainpage-light/carousel/top.svg";
import imageBottom from "../../../assets/images/mainpage-light/carousel/bottom.svg";
import imageLeft from "../../../assets/images/mainpage-light/carousel/mobile-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/mobile-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/mobile-right.svg";

const ItemsMobile = () => {
  const images = {
    type: 'mobile',
    top: imageTop,
    left: imageLeft,
    middle: imageMiddle,
    right: imageRight,
    bottom: imageBottom,
  };

  return <CarouselContainer images={images} />;
};

export default ItemsMobile;
