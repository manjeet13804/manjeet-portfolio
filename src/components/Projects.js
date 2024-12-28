import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <motion.div 
      className={`projects ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
