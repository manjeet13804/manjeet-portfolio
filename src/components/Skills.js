import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCode, FaJava, FaTools, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiPostgresql, SiExpress, SiTypescript, SiTailwindcss, SiCplusplus, SiJquery, SiVisualstudiocode, SiSublimetext, SiPostman, SiNetlify, SiEclipseide } from 'react-icons/si';

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  }
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SkillIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.accent};
  min-width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const Skills = () => {
  const skillsData = {
    programming: {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'C++', icon: <SiCplusplus />, level: 85 },
        { name: 'Java', icon: <FaJava />, level: 80 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'SQL', icon: <FaDatabase />, level: 85 },
        { name: 'HTML', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'DSA', icon: <FaCode />, level: 80 },
        { name: 'NODE.JS', icon: <FaNodeJs />, level: 85 },
      ],
    },
    frameworks: {
      title: 'Libraries & Frameworks',
      icon: <FaReact />,
      skills: [
        { name: 'jQuery', icon: <SiJquery />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 90 },
      ],
    },
    tools: {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'VS Code', icon: <SiVisualstudiocode />, level: 95 },
        { name: 'Sublime', icon: <SiSublimetext />, level: 85 },
        { name: 'Postman', icon: <SiPostman />, level: 90 },
        { name: 'Netlify', icon: <SiNetlify />, level: 85 },
        { name: 'Eclipse', icon: <SiEclipseide />, level: 80 },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <SkillsContainer id="skills">
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive overview of my technical expertise and proficiency in various technologies
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SkillsGrid>
            {Object.entries(skillsData).map(([key, category]) => (
              <SkillCategory
                key={key}
                variants={itemVariants}
              >
                <CategoryTitle>
                  <SkillIcon>{category.icon}</SkillIcon>
                  {category.title}
                </CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillIcon>{skill.icon}</SkillIcon>
                      <SkillInfo>
                        <SkillName>
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </SkillName>
                        <ProgressBar>
                          <Progress
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </ProgressBar>
                      </SkillInfo>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </Content>
    </SkillsContainer>
  );
};

export default Skills;
