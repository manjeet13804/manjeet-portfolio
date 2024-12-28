import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const skills = useSelector((state) => state.portfolio.skills);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className={`skills ${theme}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <h2>Skills</h2>
        
        <div className="skills-section">
          <h3>Programming Languages</h3>
          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.programming.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skills-section">
          <h3>Libraries & Frameworks</h3>
          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.frameworks.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skills-section">
          <h3>Tools & Platforms</h3>
          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.tools.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
