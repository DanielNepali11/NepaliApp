import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, width = '80vw', height = '35vw' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt=""
        style={{ width, height, objectFit: 'cover' }}
      />
      <div className="slider-controls">
        <button onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
