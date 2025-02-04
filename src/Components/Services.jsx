import React, { useState, useEffect } from "react";
import "../Styles/Services.css";

const images = [
  { src: "development.jpeg", title: "Web Development" },
  { src: "cloud.jpeg", title: "Cloud Solutions" },
  { src: "digitalmarketing.jpeg", title: "Digital Marketing" },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="service-container">
      <div className="service-content">
        <h1>Our Services</h1>
        <p>
        we believe that innovation is the cornerstone of progress. 
          As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
          businesses to thrive in a digitally-driven world.
        </p>
      </div>
      
      {/* Slider with titles */}
      <div className="service-slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        
        {/* Image with Title */}
        <div className="image-container">
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
          <div className="image-title">{images[currentIndex].title}</div>
        </div>

        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Services;
