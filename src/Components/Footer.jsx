import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
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
          <div className="tag-line">
            <p>KrystalNest, we weave innovation with precision, building digital nests for endless ambition.</p>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/krystalnest/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://x.com/krystalnestit" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="social-icon twitter" />
            </a>
            <a href="https://www.instagram.com/krystalnest/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
          </div>
        </div>
        
        <div className="footer-right">
          {/* Our Services */}
          <div className="footer-links hide">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/it-staffing">IT Staffing</Link></li>
              <li><Link to="/software-development">Software Development</Link></li>
              <li><Link to="/cloud-services">Cloud Services</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-links hide">
            <h3>PROJECTS</h3>
            <ul>
              <li><Link to="/project1">DevOps</Link></li>
              <li><Link to="/project1">Python</Link></li>
              <li><Link to="/project1">Full Stack</Link></li>
            </ul>
          </div>
          <div className="footer-links quick-links">
          <h3 className="links-header">Quick-Links</h3>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/software-development'}>Services</Link></li>
              {/* <li><Link to={'/project1'}>Projects</Link></li> */}
              <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="footer-links">
            <h3 className="links-header">CONTACT US</h3>
            <ul>
              <li>
                <a href="tel:+918923898349" className="contact-link">
                  <FaPhoneAlt className="contact-icon" /> <span className="contact-info">+91 8923898349</span> 
                </a>
              </li>
              <li>
                <a href="mailto:hr@krystalnest.com" className="contact-link">
                  <FaEnvelope className="contact-icon" /> <span className="contact-info">hr@krystalnest.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=High+Spirits,+3rd+Floor+Image+Gardens,+19,+Function+Hall+Lane,+Silicon+Valley,+Madhapur,+Telangana+500081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaMapMarkerAlt className="contact-icon markerAlt" /><span className="contact-info left-align">SiliconValley,Madhapur, Hyderabad, Telangana.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-divider" />

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>© All Rights Reserved @ KrystalNest IT Solutions Pvt, Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;