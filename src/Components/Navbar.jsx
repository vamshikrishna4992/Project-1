import React, { useState } from "react";
import "../Styles/Navbar.css";
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsSubmenuOpen(false); 
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./KN.png" alt="logo" />
        <h3>KrystalNest</h3>
        </div>
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li 
          className="services" 
          onMouseEnter={() => setIsSubmenuOpen(true)}
          onMouseLeave={() => setIsSubmenuOpen(false)}
        >
          <Link onClick={() => navigate('/services')}>Services</Link>
          {isSubmenuOpen && (
            <ul className="submenu">
                            <li onClick={() => handleNavigation('/services/software-development')}>
                Software Development
              </li>
              <li onClick={() => handleNavigation('/services/it-staffing')}>
                IT Staffing
              </li>
              <li onClick={() => handleNavigation('/services/cloud-services')}>
                Cloud Services
              </li>
              <li onClick={() => handleNavigation('/services/digital-marketing')}>
                Digital Marketing
              </li>
            </ul>
          )}
        </li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
      {/* <button className="contact-btn"></button> */}
      <ul>
        <li className="contact-btn"><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
