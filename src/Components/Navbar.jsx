import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='nav-container'>
        <div className="kn-logo">
          <img src="./KN.png" alt="" />
          <h3>KrystalNest</h3>
        </div>
       <div className="nav-links">
       <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
       </div>
      </nav>
    </>
  )
}

export default Navbar;