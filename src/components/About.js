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
              <a href="https://drive.google.com/file/d/1q6KnAS7Rut5iiYnUTNqE-JMuDctOQeEY/view" target="_blank" rel="noopener noreferrer">Veiw Degree</a>
            </div>
            <div className="education-item">
              <h4>Senior Secondary(12th)</h4>
              <p>Sainink School Kunjpura Karnal</p>
              <p>2015</p>
            </div>
          </div>
          <div className="certificates">
            <h3>Certifications</h3>
            <div className="certificates-section">
              <h4>Coding Ninjas</h4>
              <div className="certificate-items">
                <a href="https://certificate.codingninjas.com/view/f5eb74a901d491b8" target="_blank" rel="noopener noreferrer">React</a>
                <a href="https://ninjasfiles.s3.amazonaws.com/certificate3233679987bf58ce3b2d2f3aa77bee8a4c1aa42.pdf" target="_blank" rel="noopener noreferrer">Node.js</a>
                <a href="https://ninjasfiles.s3.amazonaws.com/certificate3233674861492f96f3d1ba2570aeb3c7e3d07c4.pdf" target="_blank" rel="noopener noreferrer">Java DSA</a>
                <a href="https://certificate.codingninjas.com/view/b2c6dd527e728f74" target="_blank" rel="noopener noreferrer">Front End</a>
                <a href="https://certificate.codingninjas.com/view/c0925590b5cd4586" target="_blank" rel="noopener noreferrer">DBMS</a>
                <a href="https://certificate.codingninjas.com/view/6a6057ae1c768038" target="_blank" rel="noopener noreferrer">System Design</a>
              </div>
            </div>
            <div className="certificates-section">
              <h4>10x Academy</h4>
              <div className="certificate-items">
                <a href="https://drive.google.com/file/d/13uLZEZMhhBu8YY8oj-_lUxcjsFoaDMNm/view" target="_blank" rel="noopener noreferrer">Full Stack web Development</a>
              </div>
            </div>
            <div className="certificates-section">
              <h4>Devtown</h4>
              <div className="certificate-items">
                <a href="https://www.cert.devtown.in/verify/if871MWj" target="_blank" rel="noopener noreferrer">Full Stack web development</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
