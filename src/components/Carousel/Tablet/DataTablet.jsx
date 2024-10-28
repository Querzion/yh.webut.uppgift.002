import React from 'react';
import CarouselContainer from '../CarouselContainer';

import imageTop from "../../../assets/images/mainpage-light/carousel/top.svg";
import imageBottom from "../../../assets/images/mainpage-light/carousel/bottom.svg";
import imageLeft from "../../../assets/images/mainpage-light/carousel/tablet-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/tablet-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/tablet-right.svg";


export const tabletHeadlines = [
    'Tablet Headline 1',
    'Tablet Headline 2',
    'Tablet Headline 3',
];
  
export const tabletTexts = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sint fugiat sequi cupiditate. Adipisci soluta eaque qui excepturi maxime iste non dolor? Consectetur!',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, blanditiis tenetur! Incidunt inventore corrupti ad! Deleniti sapiente ut aspernatur commodi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet excepturi eum amet ad?',
];


const DataTablet = () => {
  const tabletImages = {
    type: 'tablet',
    top: imageTop,
    left: imageLeft,
    middle: imageMiddle,
    right: imageRight,
    bottom: imageBottom,
  };

  const headlines = ["Tablet Headline 1", "Tablet Headline 2", "Tablet Headline 3"];
  const texts = ["Tablet Text 1", "Tablet Text 2", "Tablet Text 3"];

  return <CarouselContainer images={tabletImages} headlines={tabletHeadlines} texts={tabletTexts} currentIndex={0} />;
};

export default DataTablet;