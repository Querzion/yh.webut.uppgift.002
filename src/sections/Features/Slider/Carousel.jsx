import React, { useState, useEffect } from 'react';

import CTablet from "./CTablet";
import CDesktop from "./CDesktop";
import CMobile from "./CMobile";

const Carousel = () => {
    const [viewport, setViewport] = useState('mobile');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setViewport('mobile');
            } else if (window.innerWidth >= 768 && window.innerWidth < 1400) {
                setViewport('tablet');
            } else {
                setViewport('desktop');
            }
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize); // Add listener for window resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    }, []);

    return (
        <>
            {viewport === 'mobile' && <CMobile />}
            {viewport === 'tablet' && <CTablet />}
            {viewport === 'desktop' && <CDesktop />}
        </>
    );
};

export default Carousel;