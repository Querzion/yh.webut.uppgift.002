// src/components/DarkMode/DarkMode.jsx
import React, { useEffect, useState } from 'react';

import SiliconLogoTextDark from "/src/assets/images/mainpage-dark/navbar/silicon-text-dark.svg";
import SiliconLogoTextLight from "/src/assets/images/mainpage-light/navbar/silicon-text-light.svg";
import appleAppStoreDark from "/src/assets/images/mainpage-dark/showcase/appstore-dark.svg";
import appleAppStoreLight from "/src/assets/images/mainpage-light/showcase/appstore-light.svg";
import googlePlayStoreDark from "/src/assets/images/mainpage-dark/showcase/googleplay-dark.svg";
import googlePlayStoreLight from "/src/assets/images/mainpage-light/showcase/googleplay-light.svg";

// CODE IN MAJORITY WRITTEN BY CHATGPT! 

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to update body class and logo images based on isDarkMode
    useEffect(() => {
        const element = document.body;
        if (isDarkMode) {
            element.classList.add("dark-mode");
        } else {
            element.classList.remove("dark-mode");
        }
    
        // Update logo images only if the elements exist in the DOM
        const logo = document.getElementById('logo-text');
        if (logo) {
            logo.src = isDarkMode ? SiliconLogoTextDark : SiliconLogoTextLight;
        }
    
        const appstore_logotype = document.getElementById('appstore');
        if (appstore_logotype) {
            appstore_logotype.src = isDarkMode ? appleAppStoreDark : appleAppStoreLight;
        }
    
        const playstore_logotype = document.getElementById('playstore');
        if (playstore_logotype) {
            playstore_logotype.src = isDarkMode ? googlePlayStoreDark : googlePlayStoreLight;
        }
    }, [isDarkMode]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
                <input 
                    id="darkmode-switch" 
                    type="checkbox" 
                    checked={isDarkMode} 
                    onChange={toggleDarkMode} 
                    aria-label="dark-mode input toggle" 
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default DarkMode;