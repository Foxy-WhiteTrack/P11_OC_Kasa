import "./Slideshow.css";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className="arrows">
        <div className="arrow left" onClick={goToPreviousImage}>
          <FaChevronLeft />
        </div>
        <div className="arrow right" onClick={goToNextImage}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};
