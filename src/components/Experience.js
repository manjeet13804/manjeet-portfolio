import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceContainer = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[4]};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  &:nth-child(odd) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;

    ${({ theme }) => `@media (max-width: ${theme.breakpoints.md})`} {
      padding-left: 70px;
    }

    .timeline-content {
      &::before {
        left: auto;
        right: -15px;
        border-width: 8px 0 8px 16px;
        border-color: transparent transparent transparent ${({ theme }) => theme.colors.white};
      }
    }
  }

  ${({ theme }) => `@media (max-width: ${theme.breakpoints.md})`} {
    padding-right: 0;
    padding-left: 70px;

    .timeline-content {
      &::before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent ${({ theme }) => theme.colors.white} transparent transparent;
      }
    }
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: calc(100% - 40px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: -15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 16px 8px 0;
    border-color: transparent ${({ theme }) => theme.colors.white} transparent transparent;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  ${({ theme }) => `@media (max-width: ${theme.breakpoints.md})`} {
    left: 30px;
  }
`;

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Company = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const MetaInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Experience = () => {
  const experienceData = [
    {
      title: 'Field Engineer',
      company: 'SILICON COMNET PVT LTD',
      period: 'July 2023 - Nov 2024',
      location: 'Gurugram, India',
      description: 'Delivered IT support to major banks like Kotak and HDFC, union Bank, ensuring 95% SLA compliance and reducing system downtime by 15%. Resolved 1200+ critical PC, laptop, and printer issues for Wipro, Acer, and HP. Trained teams on hardware maintenance, improving operational efficiency.',
      technologies: ['IT Support', 'Hardware Maintenance', 'SLA Management', 'Technical Support'],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'PROVIS TECHNOLOGY',
      period: 'Jan 2023 - June 2023',
      location: 'Jaipur, Rajasthan, India',
      description: 'Developed dynamic web applications using the MERN stack, reducing API response times by 30%. Designed secure authentication systems using JWT, enhancing data protection. Collaborated with a cross-functional team to implement RESTful APIs for seamless integration.',
      technologies: ['MERN Stack', 'JWT', 'RESTful APIs', 'Responsive Design'],
    },
    {
      title: 'Full Stack Internship',
      company: 'CODING NINGAS',
      period: 'March 2024 - June 2024',
      location: 'Remote',
      description: 'Mentored 600+ problems of frontend and backend to students with a 4.6/5 rating. Assisted students in debugging and optimizing code, improving code efficiency by 20%.',
      technologies: ['Frontend', 'Backend', 'Mentoring', 'Code Optimization'],
    },
    {
      title: 'Computer Teacher',
      company: 'PAYMITRA TRANING INSTITUTE',
      period: 'July 2021 - September 2022',
      location: 'Kosli, Rewari Hayana, India',
      description: 'Taught 50+ students essential IT skills, including MS Office, computer fundamentals, HTML, CSS, and networking concepts. Achieved 90% student certification rate through effective teaching methods.',
      technologies: ['MS Office', 'HTML', 'CSS', 'Computer Fundamentals', 'Networking'],
    },
  ];

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
    <ExperienceContainer id="experience">
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A timeline of my professional journey and key achievements
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Timeline>
            {experienceData.map((job, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
              >
                <TimelineDot />
                <TimelineContent className="timeline-content">
                  <JobTitle>{job.title}</JobTitle>
                  <Company>{job.company}</Company>
                  <MetaInfo>
                    <div>
                      <FaCalendarAlt />
                      <span>{job.period}</span>
                    </div>
                    <div>
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                  </MetaInfo>
                  <Description>{job.description}</Description>
                  <TechStack>
                    {job.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Content>
    </ExperienceContainer>
  );
};

export default Experience;
