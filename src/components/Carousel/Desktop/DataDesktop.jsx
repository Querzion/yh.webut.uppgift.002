import React from 'react';
import CarouselContainer from '../CarouselContainer';

import imageBottom from "/src/assets/images/mainpage-light/carousel/desktop-bottom.svg";
import imageLeft from "/src/assets/images/mainpage-light/carousel/desktop-left.svg";
import imageMiddle from "/src/assets/images/mainpage-light/carousel/desktop-middle.svg";
import imageRight from "/src/assets/images/mainpage-light/carousel/desktop-right.svg";


export const desktopHeadlines = [
    'Desktop Headline 1',
    'Desktop Headline 2',
    'Desktop Headline 3',
];

export const desktopTexts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore explicabo ipsum labore rerum quis voluptate numquam corporis impedit ea officia perspiciatis earum. Optio corporis officiis consequuntur sunt libero similique voluptatum.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto deleniti dolore rem facere eos!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolores voluptas velit ut consectetur consequuntur in, a alias?',
];


const DataDesktop = () => {
  const desktopImages = {
    type: 'desktop',
    left: imageLeft,
    middle: imageMiddle,
    right: imageRight,
    top: null, // No top layer for desktop
    bottom: imageBottom,
  };

  return <CarouselContainer images={desktopImages} headlines={desktopHeadlines} texts={desktopTexts} currentIndex={0} />;
};

export default DataDesktop;

