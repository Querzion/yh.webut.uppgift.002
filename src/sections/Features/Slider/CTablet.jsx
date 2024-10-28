import React, { useState, useEffect, useRef } from 'react';

import imageTop from "../../../assets/images/mainpage-light/carousel/top.svg";
import imageBottom from "../../../assets/images/mainpage-light/carousel/bottom.svg";
import imageLeft from "../../../assets/images/mainpage-light/carousel/tablet-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/tablet-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/tablet-right.svg";

// Data array for tablet carousel
const tabletData = [
    {
        id: 'tablet-1',
        position: 'left',
        headline: 'Tablet Headline 1',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sint fugiat sequi cupiditate. Adipisci soluta eaque qui excepturi maxime iste non dolor? Consectetur!',
        image: imageLeft,
    },
    {
        id: 'tablet-2',
        position: 'middle',
        headline: 'Tablet Headline 2',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, blanditiis tenetur! Incidunt inventore corrupti ad! Deleniti sapiente ut aspernatur commodi?',
        image: imageMiddle,
    },
    {
        id: 'tablet-3',
        position: 'right',
        headline: 'Tablet Headline 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet excepturi eum amet ad?',
        image: imageRight,
    },
];

const CTablet = () => {
    const [tabletIndex, setTabletIndex] = useState(1); // Start with the middle image
    const tabletImagesRef = useRef([]);
    const [tabletHeadlines, setTabletHeadlines] = useState(tabletData.map(item => item.headline));
    const [tabletTexts, setTabletTexts] = useState(tabletData.map(item => item.text));
    const [tabletHeading, setTabletHeading] = useState(tabletHeadlines[tabletIndex]);
    const [tabletText, setTabletText] = useState(tabletTexts[tabletIndex]);

    // Function to get image travel distance (tablet)
    const getImageTravelDistance = () => {
        const viewWidth = window.innerWidth;
        return viewWidth <= 1399 ? 205 : 300;
    };

    // Update text content based on the current index
    const updateTextContent = (index) => {
        setTabletHeading(tabletHeadlines[index]);
        setTabletText(tabletTexts[index]);
    };

    // Function to handle leftOrder movement
    const handleLeftOrder = (moveDistance) => {
        tabletImagesRef.current.forEach((image, index) => {
            if (index === 0) {
                image.style.transform = `translateX(${moveDistance}px)`;
            } else if (index === 1) {
                image.style.transform = `translateX(-${moveDistance}px)`;
            } else {
                image.style.transform = 'translateX(0)';
            }
        });
    };

    // Function to handle rightOrder movement
    const handleRightOrder = (moveDistance) => {
        tabletImagesRef.current.forEach((image, index) => {
            if (index === 2) {
                image.style.transform = `translateX(-${moveDistance}px)`;
            } else if (index === 1) {
                image.style.transform = `translateX(${moveDistance}px)`;
            } else {
                image.style.transform = 'translateX(0)';
            }
        });
    };

    // Function to switch positions between images based on click
    const switchPositions = (index) => {
        const moveDistance = getImageTravelDistance(); // Get the appropriate travel distance
        resetImages();

        if (index === 0) {
            handleLeftOrder(moveDistance);
        } else if (index === 1) {
            resetImages(); // No movement if the middle image is clicked
        } else if (index === 2) {
            handleRightOrder(moveDistance);
        }

        updateTextContent(index); // Update the text content
    };

    // Helper function to reset all images to position 0 (no movement)
    const resetImages = () => {
        tabletImagesRef.current.forEach((image) => {
            image.style.transform = 'translateX(0)';
        });
    };

    // Attach click events to images when the component mounts
    useEffect(() => {
        resetImages(); // Start with images in the correct position
        updateTextContent(tabletIndex); // Update text based on initial index
    }, []);

    return (
        <section className="tablet-carousel">
            <div className="carousel-wrapper">
                <div className="slide-bg t-shell-outline" aria-hidden="true">
                    <img id="t-shell-outline" src={imageTop} loading="lazy" alt="tablet top layer" className="bottom-layer" />
                </div>

                <div id="t-slide-box" className="slide-box" draggable="true">
                    {tabletData.map((item, index) => (
                        <div className={`slide-layers c-box-${item.position}`} key={item.id}>
                            <img
                                ref={(el) => tabletImagesRef.current[index] = el} // Use ref to access the image
                                id={item.id} // Use ID from tabletData
                                src={item.image}
                                loading="lazy"
                                alt={`tablet ${item.position}`}
                                className={`slide-layer ${item.position}`}
                                onClick={() => switchPositions(index)} // Pass the index
                            />
                        </div>
                    ))}
                </div>

                <div className="slide-bg t-shell-bg" aria-hidden="true">
                    <img id="t-shell-bg" src={imageBottom} loading="lazy" alt="tablet bottom layer" className="bottom-layer" />
                </div>

                <div className="carousel-text-container">
                    <h3 className="carousel-heading h5 f600">{tabletHeading}</h3>
                    <p className="carousel-text">{tabletText}</p>
                </div>
            </div>
        </section>
    );
};

export default CTablet;