import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x301",
  "https://via.placeholder.com/400x302",
  "https://via.placeholder.com/400x303",
  "https://via.placeholder.com/400x304"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />
      <button
        onClick={goToPrevSlide}
        className="carousel__button carousel__button--left"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="carousel__button carousel__button--right"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

