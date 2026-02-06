import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Work.css';

// Import work images
import blImage from '../images/works/BL.png';
import scImage from '../images/works/sc.png';

// Import logos
import blLogo from '../images/works/logos/BL-logo.png';
import scLogo from '../images/works/logos/sc-logo.png';

const Work = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const worksData = [
    {
      id: 1,
      title: 'Shop All',
      image: blImage,
      logo: blLogo,
      liveUrl: 'https://www.example.com/bl', // Replace with actual URL
      caseStudyUrl: '/case-study/bl',
    },
    {
      id: 2,
      title: 'Services',
      image: scImage,
      logo: scLogo,
      liveUrl: 'https://www.example.com/sc', // Replace with actual URL
      caseStudyUrl: '/case-study/scrble', // Update when you have more case studies
    },
  ];

  return (
    <section className="works-section" id="works">
      <motion.h2
        className="works-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Works
      </motion.h2>

      <div className="works-container">
        {worksData.map((work) => (
          <motion.div
            key={work.id}
            className="work-card"
            onMouseEnter={() => !isMobile && setHoveredId(work.id)}
            onMouseLeave={() => !isMobile && setHoveredId(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: work.id * 0.2 }}
          >
            <div className="work-image-wrapper">
              <motion.img
                src={work.image}
                alt={work.title}
                className="work-image"
                animate={!isMobile ? {
                  scale: hoveredId === work.id ? 1.05 : 1,
                } : {}}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />

              {/* Overlay that appears on hover/mobile */}
              <motion.div
                className={`work-overlay ${isMobile ? 'mobile-overlay' : ''}`}
                animate={!isMobile ? {
                  opacity: hoveredId === work.id ? 1 : 0,
                } : { opacity: 1 }}
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link
                  to={work.caseStudyUrl}
                  className="button-container"
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    className="button-container-inner"
                    animate={!isMobile ? {
                      y: hoveredId === work.id ? 0 : 20,
                    } : { y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={!isMobile ? { scale: 1.02 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={work.logo}
                      alt={work.title}
                      className="button-logo"
                    />
                    <div className="case-study-button">
                      <span className="button-text">Casestudy</span>
                      <svg
                        className="arrow-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;