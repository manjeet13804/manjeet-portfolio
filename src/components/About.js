import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const theme = useSelector((state) => state.portfolio.theme);

  return (
    <motion.div 
      className={`about ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Seasoned Full Stack Developer with 6 months of experience in building
              robust web applications using modern technologies. My expertise lies in working
              with MongoDB, Express.js, React.js, and Node.js (MERN stack).
            </p>
            <p>
              I specialize in creating responsive designs, implementing authentication systems,
              and optimizing application performance to deliver high-quality user experiences.
            </p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor in Science</h4>
              <p>Maharishi Dayanand University</p>
              <p>2015 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
