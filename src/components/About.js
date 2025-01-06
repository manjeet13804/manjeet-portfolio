import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutContainer = styled(motion.div)`
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: relative;
  perspective: 1000px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => `${theme.colors.primary}15`},
      ${({ theme }) => `${theme.colors.background}`}
    );
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    transform-style: preserve-3d;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  }
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(400px, 1fr) minmax(400px, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: flex-start;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  padding: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[12]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[2]};
  }
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  transform-style: preserve-3d;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => `${theme.colors.card}80`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const CertificationsSection = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => `${theme.colors.card}80`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const CertificationTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CertificationList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CertificationItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => `${theme.colors.background}40`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  transition: all 0.3s ease;

  .cert-icon {
    font-size: 24px;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => `${theme.colors.primary}15`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .cert-content {
    flex: 1;
    
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing[1]};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}15`};
    transform: translateY(-2px);
  }
`;

const Greeting = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Role = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => `${theme.spacing[6]} 0`};
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => `linear-gradient(145deg, ${theme.colors.card}, ${theme.colors.background})`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    font-weight: bold;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const StatNumber = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-weight: bold;
`;

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &.primary {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    color: ${({ theme }) => theme.colors.white};
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => `0 5px 15px ${theme.colors.primary}40`};
    }
  }

  &.secondary {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      transition: all 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      &:before {
        width: 100%;
      }
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary}10`};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px) rotate(8deg);
    background: ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const EducationSection = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => `${theme.colors.card}80`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const EducationTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const EducationItem = styled(motion.div)`
  background: ${({ theme }) => `${theme.colors.background}40`};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  
  .edu-content {
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }

    p {
      color: ${({ theme }) => theme.colors.textLight};
      margin-bottom: ${({ theme }) => theme.spacing[2]};
      font-size: ${({ theme }) => theme.fontSizes.md};
    }

    a {
      display: inline-flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      margin-top: ${({ theme }) => theme.spacing[2]};
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const About = () => {
  const { scrollYProgress } = useScroll();
  
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const certY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Content>
        <InfoSection
          style={{ y: contentY }}
          variants={itemVariants}
        >
          <Greeting variants={itemVariants}>Hello, I'm</Greeting>
          <Name variants={itemVariants}>Manjeet Panghal</Name>
          <Role variants={itemVariants}>Full Stack Developer</Role>
          
          <Description variants={itemVariants}>
            I am a passionate Full Stack Developer with expertise in building scalable web applications.
            With a strong foundation in both frontend and backend technologies, I create elegant solutions
            that solve real-world problems. My approach combines technical excellence with creative
            problem-solving to deliver exceptional user experiences.
          </Description>

          <Stats>
            <StatItem variants={itemVariants}>
              <StatNumber>1+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem variants={itemVariants}>
              <StatNumber>60+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem variants={itemVariants}>
              <StatNumber>800+</StatNumber>
              <StatLabel>Java & Javascript DSA Problems Solved</StatLabel>
            </StatItem>
            <StatItem variants={itemVariants}>
              <StatNumber>Top Performer</StatNumber>
              <StatLabel>12th & Coding Ninjas Full Stack Course</StatLabel>
            </StatItem>
          </Stats>

          <ButtonGroup variants={itemVariants}>
            <Button 
              href="/Manjeet_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </Button>
            <Button
              as={Link}
              to="/contact"
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </Button>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialIcon
              href="https://github.com/manjeet13804"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/manjeet-panghal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
        </InfoSection>

        <LeftColumn variants={itemVariants}>
          <EducationSection
            style={{ y: certY }}
            variants={itemVariants}
          >
            <EducationTitle variants={itemVariants}>
              Education
            </EducationTitle>
            <EducationList>
              <EducationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu-content">
                  <h4>Bachelor in Science</h4>
                  <p>Maharishi Dayanand University</p>
                  <p>2015 - 2019</p>
                  <a 
                    href="https://drive.google.com/file/d/1q6KnAS7Rut5iiYnUTNqE-JMuDctOQeEY/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Degree →
                  </a>
                </div>
              </EducationItem>
              <EducationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu-content">
                  <h4>Senior Secondary (12th)</h4>
                  <p>Sainink School Kunjpura Karnal</p>
                  <p>2015</p>
                </div>
              </EducationItem>
              <EducationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu-content">
                  <h4>Advanced Diploma in Computer Science</h4>
                  <p>Paymitra Training Institute</p>
                  <p>June 2018 - June 2020</p>
                  <a href="https://drive.google.com/file/d/1LbuPqO2WkHDHJAjj-MvD86XOQIF-1MfI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Diploma</a>
                </div>
              </EducationItem>
            </EducationList>
          </EducationSection>

          <CertificationsSection
            style={{ y: certY }}
            variants={itemVariants}
          >
            <CertificationTitle variants={itemVariants}>
              Certifications
            </CertificationTitle>
            <CertificationList>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://certificate.codingninjas.com/view/f5eb74a901d491b8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">⚛️</div>
                <div className="cert-content">
                  <h4>React</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://ninjasfiles.s3.amazonaws.com/certificate3233679987bf58ce3b2d2f3aa77bee8a4c1aa42.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🟢</div>
                <div className="cert-content">
                  <h4>Node.js</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://ninjasfiles.s3.amazonaws.com/certificate3233674861492f96f3d1ba2570aeb3c7e3d07c4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">☕</div>
                <div className="cert-content">
                  <h4>Java DSA</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://certificate.codingninjas.com/view/b2c6dd527e728f74"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🎨</div>
                <div className="cert-content">
                  <h4>Front End</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://certificate.codingninjas.com/view/c0925590b5cd4586"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🗄️</div>
                <div className="cert-content">
                  <h4>DBMS</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>
              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://certificate.codingninjas.com/view/6a6057ae1c768038"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🏗️</div>
                <div className="cert-content">
                  <h4>System Design</h4>
                  <p>Coding Ninjas</p>
                </div>
              </CertificationItem>

              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://drive.google.com/file/d/13uLZEZMhhBu8YY8oj-_lUxcjsFoaDMNm/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🔟</div>
                <div className="cert-content">
                  <h4>Full Stack Web Development</h4>
                  <p>10x Academy</p>
                </div>
              </CertificationItem>

              <CertificationItem
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                as="a"
                href="https://www.cert.devtown.in/verify/if871MWj"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-icon">🌐</div>
                <div className="cert-content">
                  <h4>Full Stack Web Development</h4>
                  <p>Devtown</p>
                </div>
              </CertificationItem>
            </CertificationList>
          </CertificationsSection>
        </LeftColumn>
      </Content>
    </AboutContainer>
  );
};

export default About;
