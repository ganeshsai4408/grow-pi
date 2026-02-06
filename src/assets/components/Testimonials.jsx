import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      initial: 'P',
      text: 'Scrble website (brand vision focus)GrowPi brought my Scrble brand to life with a beautiful and thoughtfully designed website.They clearly understood my style, audience, and business goals from the start.The final result feels premium, smooth, and perfectly aligned with my brand identity',
      author: 'Pravallika Scrble',
      bgColor: '#5364AA',
      textColor: '#ffffff'
    },
    {
      id: 2,
      initial: 'B',
      text: 'Architect portfolio (clarity & professionalism focus)GrowPi built a clean and professional portfolio website that explains my architectural services with clarity.Their step-by-step collaboration and attention to detail made the entire process easy and reliable.Now my services are presented in a structured, confident, and highly professional way',
      author: 'Bhaghya lakshmi Architect',
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