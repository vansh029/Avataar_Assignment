// Carousel.jsx
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Slider.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const renderImage = (index, zIndex, transform, marginLeft) => {
    const adjustedIndex = (length + index) % length;
    const slide = slides[adjustedIndex];

    return (
      <div
        key={adjustedIndex}
        className="carousel-image-container"
        style={{
          zIndex: zIndex,
          opacity: 1,
          transform: transform,
          marginLeft: marginLeft,
          marginRight: zIndex < 5 ? "-70px" : "0",
        }}
      >
        <img
          src={slide.img}
          alt={`travel image ${adjustedIndex}`}
          onClick={() => setCurrent(adjustedIndex)}
          className="carousel-image"
        />
        <div className="carousel-textbox">
          {/* Add your content here */}
        </div>
      </div>
    );
  };

  return (
    <section className="carousel-container">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === current ? "current-slide" : ""
          }`}
        >
          {index === current && (
            <div className="carousel-images-container">
              {renderImage(current - 1, 1, "scale(0.35)", "900px")}
              {renderImage(current - 2, 3, "scale(0.55)", "500px")}
              {renderImage(current, 5, "scale(0.75)", "0")}
              {renderImage(current + 1, 4, "scale(0.55)", "-500px")}
              {renderImage(current + 2, 3, "scale(0.35)", "-900px")}
            </div>
          )}
        </div>
      ))}
      <div className="carousel-arrows">
        <FaArrowLeft className="carousel-arrow" onClick={prevSlide} size={20} />
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              current === index ? "active-indicator" : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
        <FaArrowRight
          className="carousel-arrow"
          onClick={nextSlide}
          size={20}
        />
      </div>
    </section>
  );
};

export default Carousel;
