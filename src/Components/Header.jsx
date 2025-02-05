
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import "../Styles/Header.css";


const Header = () => {
  const textRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.8, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);
  return (
    <div className="header-container">
      <Navbar />
      <div className="hero-section">
        <h1 ref={textRef} className="animated-text">Empowering your brand in digital universe</h1>
        <p ref={descriptionRef} className="description">
        "Unlocking Potential and Driving Sustainable Growth Through Innovative Technology Solutions Customized to Meet Your Unique Business Needs, Enabling You to Experience the Future Today and Transform Challenges into Opportunities for Success."
        </p>
        <button ref={buttonRef} className="get-started">
          Contact Us <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

