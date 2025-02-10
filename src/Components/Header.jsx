import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar"; 
import {Link} from 'react-router-dom'
import "../Styles/Header.css";
import gsap from 'gsap'


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
        <h1>Forging businesses to grow without any hassle.</h1>
        <p className="description">
          We build digital products and ecosystems that will support and grow your business seamlessly at any scale.
        </p>
        <Link to={'/contact'} className="headerButton">
        <button ref={buttonRef} className="get-started">
          Contact Us <span></span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;