import React, { useState, useEffect } from "react";
import "../Styles/Services.css";
import { Link } from "react-router-dom";

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
        <h1>Our <span>Projects</span></h1>
        <p>As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
        businesses to thrive in a digitally-driven world.
       
        </p>
      </div> 
      
      <div className="services-card">
        <div className="cards">
        <div className="card-rows">
          <img src="card1.jpeg" alt=""/>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <Link to="/software-development"><button>know more</button></Link>
          </div>
          <div className="card-rows">
          <img src="card2.jpeg" alt=""/>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <button>know more</button>
          </div>
          <div className="card-rows">
          <img src="card3.jpeg" alt=""/>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <button>know more</button>
          </div>
          <div className="card-rows">
          <img src="card4.jpeg" alt=""/>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <button>know more</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;
