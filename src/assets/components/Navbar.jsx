import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <div className="nav-pill">
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <button className="discovery-btn">
            Book a Discovery call ↗
          </button>
        </>
      )}

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <div className="hamburger-container">
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#work" onClick={closeMenu}>Our Work</a></li>
              <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;