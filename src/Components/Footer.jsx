import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css"; // Import an external CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Company Name */}
      <div className="footer-brand">
        <Link to="/">
          <img src="KN.png" alt="KN Logo" className="logo" />
        </Link>
        <h1>
          <Link to="/" className="brand-name">
            KrystalNest
          </Link>
        </h1>
      </div>
      
      <div className="footer-grid">
        {/* Quick Links */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-links">
          <h3>SOCIAL</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>CONTACT</h3>
          <p>info@krystalnest.com</p>
          <p>Silicon Valley, Madhapur, Hyderabad, Telangana.</p>
        </div>

        {/* Policy Links */}
        <div className="footer-links">
          <h3>POLICY</h3>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/accessibility">Accessibility Statement</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2025 by KrystalNest IT Solutions Pvt, Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;