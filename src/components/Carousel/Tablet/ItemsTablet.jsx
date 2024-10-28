// TabletCarousel.jsx
import React from 'react';
import CarouselContainer from '../../CarouselContainer';

import imageTop from "../../../assets/images/mainpage-light/carousel/top.svg";
import imageBottom from "../../../assets/images/mainpage-light/carousel/bottom.svg";
import imageLeft from "../../../assets/images/mainpage-light/carousel/tablet-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/tablet-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/tablet-right.svg";

const ItemsTablet = () => {
  const images = {
    type: 'tablet',
    top: imageTop,
    left: imageLeft,
    middle: imageMiddle,
    right: imageRight,
    bottom: imageBottom,
  };

  return <CarouselContainer images={images} />;
};

export default ItemsTablet;
