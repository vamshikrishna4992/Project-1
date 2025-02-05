// import React, { useState } from "react";
// import "../Styles/Navbar.css";
// import {Link,useNavigate} from 'react-router-dom'

// const Navbar = () => {
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsSubmenuOpen(false); 
//   };
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="./KN.png" alt="logo" />
//         <h3>KrystalNest</h3>
//         </div>
//      <div className="all-nav-links">
//      <ul className="nav-links">
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/about'>About</Link></li>
//         <li 
//           className="services" 
//           onMouseEnter={() => setIsSubmenuOpen(true)}
//           onMouseLeave={() => setIsSubmenuOpen(false)}
//         >
//           <Link onClick={() => navigate('/services')}>Services</Link>
//           {isSubmenuOpen && (
//             <ul className="submenu">
//                             <li onClick={() => handleNavigation('/services/software-development')}>
//                 Software Development
//               </li>
//               <li onClick={() => handleNavigation('/services/it-staffing')}>
//                 IT Staffing
//               </li>
//               <li onClick={() => handleNavigation('/services/cloud-services')}>
//                 Cloud Services
//               </li>
//               <li onClick={() => handleNavigation('/services/digital-marketing')}>
//                 Digital Marketing
//               </li>
//             </ul>
//           )}
//         </li>
//         <li><Link to='/projects'>Projects</Link></li>
//       </ul>
//       {/* <button className="contact-btn"></button> */}
//       <ul>
//         <li className="contact-btn"><Link to='/contact'>Contact</Link></li>
//       </ul>
//      </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsSubmenuOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./KN.png" alt="logo" />
        <h3>KrystalNest</h3>
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
            <Link to='/services' onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            {isSubmenuOpen && (
              <ul className="submenu">
                <li onClick={() => handleNavigation('/software-development')}>Software Development</li>
                <li onClick={() => handleNavigation('/it-staffing')}>IT Staffing</li>
                <li onClick={() => handleNavigation('/cloud-services')}>Cloud Services</li>
                <li onClick={() => handleNavigation('/digital-marketing')}>Digital Marketing</li>
              </ul>
            )}
          </li>
          <li><Link to='/projects' onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
        </ul>
        <ul>
          <li className="contact-btn"><Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

