import React, { useEffect, useState } from 'react';
import { desktopHeadlines, desktopTexts } from './Desktop/DataDesktop';
import { tabletHeadlines, tabletTexts } from './Tablet/DataTablet';
import CarouselDesktop from './Desktop/CarouselDesktop';
import CarouselTablet from './Tablet/CarouselTablet';
import CarouselMobile from './Mobile/CarouselMobile';
import Carousel from './CarouselT+';

const CarouselSwitch = () => {
  const [deviceType, setDeviceType] = useState('mobile');

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setDeviceType('desktop');
    } else if (width >= 768) {
      setDeviceType('tablet');
    } else {
      setDeviceType('mobile');
    }
  };

  useEffect(() => {
    // Set initial device type
    updateDeviceType();
    // Update device type on window resize
    window.addEventListener('resize', updateDeviceType);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return (
    <div>
      {deviceType === 'desktop' && (
        <CarouselDesktop headlines={desktopHeadlines} texts={desktopTexts} />
      )}
      {deviceType === 'tablet' && (
        <CarouselTablet headlines={tabletHeadlines} texts={tabletTexts} />
      )}
      {deviceType === 'mobile' && <CarouselMobile />}
    </div>
  );
};

export default CarouselSwitch;
