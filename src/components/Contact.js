import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const theme = useSelector((state) => state.portfolio.theme);

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
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
