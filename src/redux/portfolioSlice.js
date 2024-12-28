import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  activeSection: 'home',
  skills: {
    programming: ['C++', 'Java', 'JavaScript', 'SQL', 'CSS', 'HTML', 'MongoDB', 'DSA', 'NODE.JS'],
    frameworks: ['jQuery', 'Node.js', 'React', 'Express.js', 'Bootstrap'],
    tools: ['Git', 'Eclipse', 'VS Code', 'Sublime', 'Postman', 'Netlify']
  },
  experience: [
    {
      company: 'PROVIS TECHNOLOGY',
      role: 'Full Stack Web Developer',
      period: 'Jan 2023 - June 2023',
      location: 'Jaipur, Rajasthan, India',
      highlights: [
        'Developed and dynamic web application using the MERN stack',
        'Implemented RESTful APIs and authentication systems'
      ]
    },
    {
      company: 'SILICON COMNET PVT LTD',
      role: 'Field Engineer',
      period: 'July 2023 - Nov 2024',
      location: 'Gurugram, India',
      highlights: [
        'Computer Technician expert in PC, Laptop and printer',
        'Proven track record of delivering exceptional IT service'
      ]
    }
  ],
  projects: [
    {
      name: 'Real Estate Management App',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Feature-rich Login, Sign Up, Create new Blog, Dashboard components using MERN stack',
      github: 'https://github.com'
    },
    {
      name: 'Employee Review System',
      technologies: ['Node.js', 'Express.js', 'Mongoose', 'Passport.js'],
      description: 'Comprehensive Employee Review System with admin and employee views',
      github: 'https://github.com'
    }
  ]
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    }
  },
});

export const { toggleTheme, setActiveSection } = portfolioSlice.actions;
export default portfolioSlice.reducer;
