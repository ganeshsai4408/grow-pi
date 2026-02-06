import React from 'react';
import './Hero.css';
import { BsCursor } from 'react-icons/bs';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Floating Tags with cursor icons */}
      <div className="floating-tag founders-tag">
        <BsCursor className="cursor-icon founders-cursor" />
        <span>Founders</span>
      </div>
      
      <div className="floating-tag freelancers-tag">
        <BsCursor className="cursor-icon freelancers-cursor" />
        <span>Freelancers</span>
      </div>
      
      <div className="floating-tag business-owners-tag">
        <BsCursor className="cursor-icon business-owners-cursor" />
        <span>Business owners</span>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-white">Digitalize your Business</span>
          <span className="title-muted">and grow faster</span>
        </h1>
        
        <button className="hero-cta" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;