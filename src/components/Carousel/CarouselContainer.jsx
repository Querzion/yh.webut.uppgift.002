import React from 'react';

function CarouselContainer({ images, text }) {
  return (
    <section className={`carousel ${images.type}-carousel`}>
      <div className="carousel-wrapper">
        <div className="carousel-grid">
          {/* Top layer (for mobile) */}
          {images.top && (
            <div className="c-layers c-top-layer">
              <img src={images.top} loading="lazy" alt="top layer" className="outer-layers layer-1" aria-hidden="true" />
            </div>
          )}

          {/* Slide Layer */}
          <div id={`${images.type}-slide-layer`} className={`c-middle-layer ${images.type === 'mobile' ? 'draggable' : ''}`} draggable={images.type === 'tablet' || images.type === 'desktop'}>
            <div className="c-layers left">
              <img src={images.left} loading="lazy" alt="left image" className="inner-layers image-1" />
            </div>
            <div className="c-layers middle">
              <img src={images.middle} loading="lazy" alt="middle image" className="inner-layers image-2" />
            </div>
            <div className="c-layers right">
              <img src={images.right} loading="lazy" alt="right image" className="inner-layers image-3" />
            </div>
          </div>

          {/* Bottom layer (for mobile) */}
          {images.bottom && (
            <div className="c-layers c-bottom-layer">
              <img src={images.bottom} loading="lazy" alt="bottom layer" className="outer-layers layer-3" aria-hidden="true" />
            </div>
          )}

          {/* Text Container */}
          <div className="carousel-text-container">
            <h3 className="carousel-heading">{text.heading}</h3>
            <p className="carousel-text">{text.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselContainer;
