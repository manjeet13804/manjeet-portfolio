import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const experience = useSelector((state) => state.portfolio.experience);

  return (
    <motion.div 
      className={`experience ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-header">
                <h3>{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4>{exp.role}</h4>
              <p className="location">{exp.location}</p>
              <ul>
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
