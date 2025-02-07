import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side: Logo & Social Links */}
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
            <p>KrystalNest, we weave innovation with
              precision, Building digital nests for endless
              ambition.</p>
          </div>
          {/* Social Media Icons */}
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

        {/* Right Side: Links */}
        <div className="footer-right">
          {/* Our Services */}
          <div className="footer-links">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/it-staffing">IT Staffing</Link></li>
              <li><Link to="/software-development">Software Development</Link></li>
              <li><Link to="/cloud-services">Cloud Services</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-links">
            <h3>PROJECTS</h3>
            <ul>
              <li><Link to="/project1">DevOps</Link></li>
              <li><Link to="/project1">Python</Link></li>
              <li><Link to="/project1">Full Stack</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <ul>
              {/* Phone Link */}
              <li>
                <a href="tel:+918923898349" className="contact-link">
                  <FaPhoneAlt className="contact-icon" /> 8923898349
                </a>
              </li>

              {/* Email Link */}
              <li>
                <a href="mailto:hr@krystalnest.com" className="contact-link">
                  <FaEnvelope className="contact-icon" /> hr@krystalnest.com
                </a>
              </li>

              {/* Google Maps Link for Address */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Silicon+Valley,+Madhapur,+Hyderabad,+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaMapMarkerAlt className="contact-icon" /> Silicon Valley, Madhapur, Hyderabad, Telangana.
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
