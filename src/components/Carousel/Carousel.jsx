import React, { useState } from 'react';
import './carousel.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className='carousel_buttons'>
        <button
          onClick={goToPrevious}
          className="carousel_buttons_button"
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <p className='carousel_buttons_count'>
          {currentIndex + 1} of {items.length}
        </p>
        <button
          onClick={goToNext}
          className="carousel_buttons_button"
          disabled={currentIndex + 1 === items.length}
        >
          &#10095;
        </button>
      </div>
      
      <div className='carousel_slider'>
        {items[currentIndex]}
      </div>
      
    </div>
  );
};

export default Carousel;
