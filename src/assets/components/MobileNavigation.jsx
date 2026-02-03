import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavigation = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-nav-toggle"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-menu"
          >
            <h3 className="mobile-nav-title">Contents</h3>
            <ul className="mobile-nav-list">
              {sections.map((section) => (
                <li key={section.id} className="mobile-nav-item">
                  <button
                    onClick={() => {
                      onSectionClick(section.id);
                      setIsOpen(false);
                    }}
                    className={activeSection === section.id ? 'active' : ''}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;