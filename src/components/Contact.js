import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_xxxxxxx', // Replace with your service ID
      'template_xxxxxxx', // Replace with your template ID
      form.current,
      'xxxxxxxxxxxxxx' // Replace with your public key
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <motion.div 
      className={`contact ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>manjeet13804@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>9053281670</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Jhajjar, Haryana</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            ref={form}
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="from_name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="from_email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="status-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="status-message error">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
