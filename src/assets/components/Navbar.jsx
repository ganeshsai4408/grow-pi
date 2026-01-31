import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* Logo on the left */}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* The White Floating Pill */}
      <div className="nav-pill">
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </div>

      {/* The Independent Discovery Button on the right */}
      <button className="discovery-btn">
        Book a Discovery call ↗
      </button>
    </nav>
  );
};

export default Navbar;