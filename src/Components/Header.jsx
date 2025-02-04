import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import "../Styles/Header.css";


const Header = () => {
  return (
    <div className="header-container">
      <Navbar/>
      <div className="hero-section">
        <h1>Forging businesses to grow without any hassle.</h1>
        <p className="description">
          "We build digital products and ecosystems that will support and grow your business seamlessly at any scale."
        </p>
        <button className="get-started">
          Get Started <span>→</span>
        </button>
        
      </div>
    </div>
    
  );
};

export default Header;
