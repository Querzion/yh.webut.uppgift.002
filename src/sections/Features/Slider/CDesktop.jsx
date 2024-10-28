import React, { useState, useEffect, useRef } from 'react';

import imageBottom from "../../../assets/images/mainpage-light/carousel/desktop-bottom.svg";

import imageLeft from "../../../assets/images/mainpage-light/carousel/desktop-left.svg";
import imageMiddle from "../../../assets/images/mainpage-light/carousel/desktop-middle.svg";
import imageRight from "../../../assets/images/mainpage-light/carousel/desktop-right.svg";

// Data array for desktop carousel
const desktopData = [
    { 
        id: 'desktop-1', 
        position: 'left', 
        headline: 'Desktop Headline 1', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore explicabo ipsum labore rerum quis voluptate numquam corporis impedit ea officia perspiciatis earum. Optio corporis officiis consequuntur sunt libero similique voluptatum.', 
        image: imageLeft }
        ,
    { 
        id: 'desktop-2', 
        position: 'middle', 
        headline: 'Desktop Headline 2', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto deleniti dolore rem facere eos!', 
        image: imageMiddle
    },
    { 
        id: 'desktop-3', 
        position: 'right', 
        headline: 'Desktop Headline 3', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolores voluptas velit ut consectetur consequuntur in, a alias?', 
        image: imageRight 
    },
];

const CDesktop = () => {
    const [desktopIndex, setDesktopIndex] = useState(1); // Start with the middle image
    const desktopImagesRef = useRef([]); // Ref to keep track of image elements
    const [desktopHeadlines, setDesktopHeadlines] = useState(desktopData.map(item => item.headline));
    const [desktopTexts, setDesktopTexts] = useState(desktopData.map(item => item.text));
    const [desktopHeading, setDesktopHeading] = useState(desktopHeadlines[desktopIndex]);
    const [desktopText, setDesktopText] = useState(desktopTexts[desktopIndex]);

    // Function to get image travel distance (desktop)
    const getImageTravelDistance = () => {
        const viewWidth = window.innerWidth;
        return viewWidth <= 1399 ? 205 : 300; // Adjust distance based on screen size
    };

    // Update text content based on the current index
    const updateTextContent = (index) => {
        setDesktopHeading(desktopHeadlines[index]);
        setDesktopText(desktopTexts[index]);
    };

    // Function to handle leftOrder movement
    const handleLeftOrder = (moveDistance) => {
        desktopImagesRef.current.forEach((image, index) => {
            if (index === 0) {
                image.style.transform = `translateX(${moveDistance}px)`; // Move left image
            } else if (index === 1) {
                image.style.transform = `translateX(-${moveDistance}px)`; // Move middle image
            } else {
                image.style.transform = 'translateX(0)'; // Reset right image
            }
        });
    };

    // Function to handle rightOrder movement
    const handleRightOrder = (moveDistance) => {
        desktopImagesRef.current.forEach((image, index) => {
            if (index === 2) {
                image.style.transform = `translateX(-${moveDistance}px)`; // Move right image
            } else if (index === 1) {
                image.style.transform = `translateX(${moveDistance}px)`; // Move middle image
            } else {
                image.style.transform = 'translateX(0)'; // Reset left image
            }
        });
    };

    // Function to switch positions between images based on click
    const switchPositions = (index) => {
        const moveDistance = getImageTravelDistance(); // Get the appropriate travel distance
        resetImages(); // Reset all images before movement

        if (index === 0) {
            handleLeftOrder(moveDistance); // Handle left order movement
        } else if (index === 1) {
            resetImages(); // No movement if the middle image is clicked
        } else if (index === 2) {
            handleRightOrder(moveDistance); // Handle right order movement
        }

        updateTextContent(index); // Update the text content
    };

    // Helper function to reset all images to position 0 (no movement)
    const resetImages = () => {
        desktopImagesRef.current.forEach((image) => {
            image.style.transform = 'translateX(0)';
        });
    };

    // Attach click events to images when the component mounts
    useEffect(() => {
        resetImages(); // Start with images in the correct position
        updateTextContent(desktopIndex); // Update text based on initial index
    }, []);

    return (
        <section className="desktop-carousel">
            <div className="carousel-wrapper">
                <div id="d-slide-box" className="slide-box" draggable="true">
                    {desktopData.map((item, index) => (
                        <div key={item.id} className={`slide-layers c-box-${item.position} mask`}>
                            <img
                                id={`d-${index + 1}`}
                                src={item.image}
                                loading="lazy"
                                alt={`desktop ${item.position} image`}
                                className="slide-layer"
                                onClick={() => switchPositions(index)}
                                ref={el => desktopImagesRef.current[index] = el} // Assigning ref to images
                            />
                        </div>
                    ))}
                </div>

                <div className="slide-bg" aria-hidden="true">
                    <img id="d-shell" src={imageBottom} loading="lazy" alt="desktop shell" className="bottom-layer" />
                </div>

                <div className="carousel-text-container">
                    <h3 className="carousel-heading h5 f600">{desktopHeading}</h3>
                    <p className="carousel-text">{desktopText}</p>
                </div>
            </div>
        </section>
    );
};

export default CDesktop;