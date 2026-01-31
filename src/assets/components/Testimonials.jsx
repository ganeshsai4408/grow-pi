import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      initial: 'P',
      text: 'Tell us about your goals and project requirementsTell us about your goals and project requirementsTell us about your goals and project requirements',
      author: 'pravallika Scrble',
      bgColor: '#5364AA',
      textColor: '#ffffff'
    },
    {
      id: 2,
      initial: 'B',
      text: 'Tell us about your goals and project requirementsTell us about your goals and project requirementsTell us about your goals and project requirements',
      author: 'Bhaghya lakshmi Scrble',
      bgColor: '#FFF1E099',
      textColor: '#000000'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Testonomials
      </motion.h2>

      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`testimonial-card ${index === 0 ? 'tilted-left' : ''}`}
            style={{
              backgroundColor: testimonial.bgColor,
              color: testimonial.textColor
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="testimonial-initial">{testimonial.initial}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">-{testimonial.author}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;