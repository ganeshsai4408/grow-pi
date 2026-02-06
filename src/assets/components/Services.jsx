import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

// Import images
import portfolioImg from '../images/portfolio (1).png';
import ecommerceImg from '../images/ecom.png';
import shopifyImg from '../images/shopify.png';

const servicesData = [
  {
    id: 1,
    title: 'E-commerce',
    tag: 'E-commerce websites',
    description:
      'We build powerful e-commerce platforms that drive sales and deliver seamless shopping experiences. From product catalogs to secure checkout, we create online stores that convert browsers into buyers.',
    image: ecommerceImg,
  },
  {
    id: 2,
    title: 'Portfolio',
    tag: 'Portfolio websites',
    description:
      'We design portfolio, freelance, service-based, and static websites tailored for professionals, businesses, and personal brands. From freelancers to construction builders and gym trainers, we create clean, modern websites that showcase services and convert visitors into clients.',
    image: portfolioImg,
  },
  {
    id: 3,
    title: 'Shopify',
    tag: 'Shopify stores',
    description:
      'We specialize in creating stunning Shopify stores that are optimized for conversions. From custom themes to app integrations, we help you launch and scale your online business with ease.',
    image: shopifyImg,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = useCallback(() => {
    if (!isMobile) {
      setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
    }
  }, [isMobile]);

  const handleNext = useCallback(() => {
    if (!isMobile) {
      setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
    }
  }, [isMobile]);

  // Keyboard navigation (disabled on mobile)
  useEffect(() => {
    if (isMobile) return; // Disable keyboard navigation on mobile
    
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext, isMobile]);

  // Calculate track offset to center the active card
  const calculateTrackOffset = () => {
    const cardWidth = 400; // Average card width for calculation
    const cardGap = 24; // Gap between cards
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const centerOffset = containerWidth / 2;
    const cardCenterPosition = activeIndex * (cardWidth + cardGap) + cardWidth / 2;
    return centerOffset - cardCenterPosition;
  };

  const trackOffset = calculateTrackOffset();

  return (
    <section className="services-section" id="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      <div className={`services-slider-container ${isMobile ? 'mobile-view' : ''}`}>
        <motion.div 
          className={`services-slider-track ${isMobile ? 'mobile-stack' : ''}`}
          animate={isMobile ? {} : {
            x: trackOffset
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {servicesData.map((service, index) => {
            const isActive = isMobile ? true : index === activeIndex; // Always active on mobile
            
            // Calculate parallax offset based on distance from center (disabled on mobile)
            const distanceFromCenter = index - activeIndex;
            const parallaxOffset = (isActive || isMobile) ? 0 : distanceFromCenter * -15;

            return (
              <motion.div
                key={service.id}
                className={`service-card ${isActive ? 'active' : 'inactive'} ${isMobile ? 'mobile-card' : ''}`}
                animate={isMobile ? {} : {
                  width: isActive ? 390 : 350,
                  height: isActive ? 520 : 340,
                }}
                transition={{
                  duration: 0.1,
                  ease: [0.1, 0, 0.1, 0.1],
                }}
              >
                <div className="card-inner">
                  <motion.div
                    className="card-image-container"
                    style={{ overflow: 'hidden' }}
                    animate={isMobile ? {} : {
                      height: isActive ? 260 : 200,
                    }}
                    transition={{
                      duration: 0.1,
                      ease: [0.1, 0, 0.1, 0.1],
                    }}
                  >
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="card-image"
                      style={isMobile ? {} : {
                        x: parallaxOffset,
                      }}
                    />
                  </motion.div>

                  {(isActive || isMobile) && (
                    <div className="card-content">
                      <span className="card-tag">{service.tag}</span>
                      <p className="card-description">{service.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {!isMobile && (
          <div className="services-navigation">
            <motion.button
              className="nav-button prev"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous service"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>
            <motion.button
              className="nav-button next"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next service"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
