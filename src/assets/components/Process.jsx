import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import step1 from '../images/steps/step(1).jpg';
import step2 from '../images/steps/step(2).jpg';
import step3 from '../images/steps/step(3).jpg';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stepImages = {
    1: step1,
    2: step2,
    3: step3,
  };

  const steps = [
    {
      id: 1,
      title: 'Define Your Vision',
      description:
        'Share your goals, ideas, and requirements with us. We start with a discovery call to understand your business and what you want to achieve digitally.',
    },
    {
      id: 2,
      title: 'Plan the Right Strategy',
      description:
        'Together, we shape the approach, scope, and structure of your project. You review the strategy and flow before we move into design and development.',
    },
    {
      id: 3,
      title: 'Bring It to Life',
      description:
        'Our team builds and refines your solution while keeping you updated throughout the process. The final product is delivered ready to launch and grow.',
    },
  ];

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 100,
      rotate: -15,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      rotate: 15,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>How to Get Started with Growpi</h2>
      
      {/* Mobile Layout */}
      {isMobile ? (
        <div style={styles.mobileContainer}>
          {steps.map((step) => (
            <div key={step.id} style={styles.mobileStepCard}>
              <div style={styles.mobileStepHeader}>
                <span style={styles.mobileStepNumber}>
                  Step-{step.id}
                </span>
              </div>
              
              <div style={styles.mobileImageContainer}>
                <img
                  src={stepImages[step.id]}
                  alt={`Step ${step.id}`}
                  style={styles.mobileImage}
                />
              </div>
              
              <div style={styles.mobileStepContent}>
                <h3 style={styles.mobileStepTitle}>
                  {step.title}
                </h3>
                <p style={styles.mobileStepDescription}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop Layout */
        <div style={styles.container}>
          {/* Left Side - Image */}
          <div style={styles.imageContainer}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={stepImages[activeStep]}
                alt={`Step ${activeStep}`}
                style={styles.image}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          {/* Right Side - Steps */}
          <div style={styles.stepsContainer}>
            {steps.map((step) => (
              <div
                key={step.id}
                style={{
                  ...styles.stepCard,
                  ...(activeStep === step.id ? styles.activeStepCard : {}),
                }}
                onClick={() => setActiveStep(step.id)}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <span
                  style={{
                    ...styles.stepNumber,
                    ...(activeStep === step.id ? styles.activeStepNumber : {}),
                  }}
                >
                  Step-{step.id}
                </span>
                <h3
                  style={{
                    ...styles.stepTitle,
                    ...(activeStep === step.id ? styles.activeStepTitle : {}),
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    ...styles.stepDescription,
                    ...(activeStep === step.id ? styles.activeStepDescription : {}),
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 5%',
    fontFamily: '"Nunito Sans", sans-serif',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#1a1a1a',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  // Desktop styles
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: '1',
    minWidth: '280px',
    maxWidth: '450px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '12px',
  },
  stepsContainer: {
    flex: '1',
    minWidth: '280px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  stepCard: {
    padding: '20px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
  },
  activeStepCard: {
    backgroundColor: '#5364AA',
    boxShadow: '0 10px 30px rgba(83, 100, 170, 0.3)',
  },
  stepNumber: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#5364AA',
    marginBottom: '8px',
    display: 'block',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  activeStepNumber: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  stepTitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '10px',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  activeStepTitle: {
    color: '#fff',
  },
  stepDescription: {
    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
    lineHeight: '1.6',
    color: '#666',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  activeStepDescription: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  // Mobile styles
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '0 20px',
  },
  mobileStepCard: {
    backgroundColor: '#fff',
    border: '2px solid #f0f0f0',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s ease',
  },
  mobileStepHeader: {
    marginBottom: '16px',
  },
  mobileStepNumber: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#5364AA',
    backgroundColor: '#f8f9ff',
    padding: '8px 16px',
    borderRadius: '20px',
    display: 'inline-block',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  mobileImageContainer: {
    width: '100%',
    height: '200px',
    marginBottom: '20px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
  },
  mobileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  mobileStepContent: {
    textAlign: 'left',
  },
  mobileStepTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
    fontFamily: '"Nunito Sans", sans-serif',
  },
  mobileStepDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#666',
    fontFamily: '"Nunito Sans", sans-serif',
    margin: '0',
  },
};

export default Process;