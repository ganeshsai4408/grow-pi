import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_kqrbpl3';
    const templateId = 'template_rlwfwaw';
    const publicKey = 'Aehtb8IbScf9AD-CX';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessage('Message sent successfully!');
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-panel">
          <div className="contact-left">
            <h3 className="left-cta">Ready to get started ?</h3>

            <div className="left-contacts">
              <div className="left-line">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:987654321234">7093308238</a>
              </div>
              <div className="left-line">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href="mailto:growpi4408@gmail.com">growpi4408@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="form-title">Get in touch</h3>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />

              <label>Email</label>
              <input type="email" name="user_email" required />

              <label>Message</label>
              <textarea name="message" rows="5" required />

              <button className="send-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'send message'}
              </button>
            </form>
            {message && <p style={{marginTop: '10px', color: message.includes('success') ? '#4caf50' : '#f44336'}}>{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;