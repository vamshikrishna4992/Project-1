import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsSubmenuOpen(false);
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
       <Link to='/' onClick={() => setIsMobileMenuOpen(false)}> <img src="./KN.png" alt="logo" /></Link>
       <Link to='/' onClick={() => setIsMobileMenuOpen(false)}> <h3>KrystalNest</h3></Link>
      
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`all-nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
              <ul className="nav-links">
                <li><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                <li className="services" 
                    onMouseEnter={() => setIsSubmenuOpen(true)}
                    onMouseLeave={() => setIsSubmenuOpen(false)}>
                  <Link to='#' onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                  {isSubmenuOpen && (
                    <ul className="submenu">
                      <li onClick={() => handleNavigation('/software-development')}>Software Development</li>
                      <li onClick={() => handleNavigation('/it-staffing')}>IT Staffing</li>
                      <li onClick={() => handleNavigation('/cloud-services')}>Cloud Services</li>
                      <li onClick={() => handleNavigation('/digital-marketing')}>Digital Marketing</li>
                    </ul>
                  )}
                </li>
                <li><Link to='/project1' onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
              </ul>
        <ul>
          <li className="nav-contact-btn"><Link to='/contact' className="contactus" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;