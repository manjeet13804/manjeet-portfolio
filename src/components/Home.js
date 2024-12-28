import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const theme = useSelector((state) => state.portfolio.theme);

  return (
    <div className={`home ${theme}`}>
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm Manjeet Panghal</h1>
        <h2>Full Stack Web Developer</h2>
        <p>Specializing in MERN Stack Development</p>
        
        <div className="social-links">
          <a href="https://github.com/manjeet13804" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/manjeet-panghal" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:manjeet13804@gmail.com">
            Email
          </a>
        </div>

        <div className="location-info">
          <p>📍 Jhajjar, Haryana</p>
          <p>📱 9053281670</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
