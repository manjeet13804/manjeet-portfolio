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
      company: 'SILICON COMNET PVT LTD',
      role: 'Field Engineer',
      period: 'July 2023 - Nov 2024',
      location: 'Gurugram, India',
      highlights: [
        'Delivered IT support to major banks like Kotak and HDFC, union Bank, ensuring 95% SLA compliance and reducing system downtime by 15%',
        'Resolved 1200+ critical PC, laptop, and printer issues for Wipro, Acer, and HP',
        'Delivered IT services for major banks like Kotak, HDFC, and Axis',
        'Resolved 95% of technical issues within SLA, ensuring seamless operations',
        'Trained teams on hardware maintenance, improving operational efficiency'
      ]
    },
    {
      company: 'PROVIS TECHNOLOGY',
      role: 'Full Stack Web Developer',
      period: 'Jan 2023 - June 2023',
      location: 'Jaipur, Rajasthan, India',
      highlights: [
        'Developed dynamic web applications using the MERN stack, reducing API response times by 30%',
        'Designed secure authentication systems using JWT, enhancing data protection',
        'Collaborated with a cross-functional team to implement RESTful APIs for seamless integration',
        'Enhanced user experience through optimized responsive design',
        'Implemented scalable solutions using modern web technologies'
      ]
    },
    {
      company: 'CODING NINGAS',
      role: 'Full Stack Internship',
      period: 'March 2024 - June 2024',
      location: 'Remote',
      highlights: [
        'Mentored 600+ problems of frontend and backend to students with a 4.6/5 rating',
        'Assisted students in debugging and optimizing code, improving code efficiency by 20%'
      ]
    },
    {
      company: 'PAYMITRA TRANING INSTITUTE',
      role: 'Computer Teacher',
      period: 'July 2021 - September 2022',
      location: 'Kosli, Rewari Hayana, India',
      highlights: [
        'Taught 50+ students essential IT skills, including MS Office, computer fundamentals, HTML, CSS, and networking concepts',
        'Achieved 90% student certification rate through effective teaching methods'
      ]
    }
  ],
  projects: [
    {
      name: 'Real Estate Platform',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Full-stack real estate platform with property listings, user authentication, and property management. Features include advanced search filters, image upload functionality, property favoriting, and real-time chat with property owners. Implements secure payment gateway integration and admin dashboard for property verification.',
      github: 'https://github.com/manjeet13804/real-estate'
    },
    {
      name: 'Social Media Dashboard',
      technologies: ['React.js', 'Node.js', 'Chart.js', 'Analytics'],
      description: 'Advanced analytics dashboard for social media metrics visualization and reporting. Includes real-time data tracking, customizable widgets, automated report generation, and multi-platform integration. Features interactive charts and export functionality for detailed analysis.',
      github: 'https://github.com/manjeet13804/social-media-dashboard'
    },
    {
      name: 'OHSM Project',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Full-stack application with modern frontend and backend implementation. Features include role-based access control, real-time notifications, comprehensive dashboard analytics, and automated reporting system. Implements secure file handling and data visualization components.',
      github: 'https://github.com/manjeet13804/ohsm'
    },
    {
      name: 'React E-commerce',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Complete e-commerce solution with product management and shopping cart. Includes features like user authentication, order tracking, payment integration, wishlist management, and admin dashboard. Implements responsive design and optimized product search functionality.',
      github: 'https://github.com/manjeet13804/react-ecommerce'
    },
    {
      name: 'Collaborative Whiteboard',
      technologies: ['React.js', 'WebSocket', 'Canvas API'],
      description: 'Real-time collaborative drawing application with live updates. Features include multiple drawing tools, layer management, session persistence, and real-time cursor tracking. Implements WebSocket for seamless collaboration and custom drawing algorithms.',
      github: 'https://github.com/manjeet13804/collaborative_whiteboard'
    },
    {
      name: 'Note Maker',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Full-stack note-taking application with CRUD operations. Features include rich text editing, tag management, note categorization, and search functionality. Implements auto-save, markdown support, and file attachment capabilities.',
      github: 'https://github.com/manjeet13804/note-maker'
    },
    {
      name: 'URL Shortener',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'URL shortening service with analytics and link management. Features include custom alias creation, QR code generation, click tracking, and detailed analytics dashboard. Implements rate limiting and link expiration functionality.',
      github: 'https://github.com/manjeet13804/url-shortner'
    },
    {
      name: 'Chat Application',
      technologies: ['React.js', 'WebSocket', 'Node.js'],
      description: 'Real-time chat application with instant messaging features. Includes group chat support, file sharing, message history, and user presence indicators. Implements end-to-end encryption and message delivery status.',
      github: 'https://github.com/manjeet13804/chat_app'
    },
    {
      name: 'Weather App',
      technologies: ['React.js', 'Weather API', 'CSS3'],
      description: 'Weather forecast application with location-based updates. Features include 7-day forecast, hourly predictions, weather alerts, and multiple location tracking. Implements geolocation and interactive weather maps.',
      github: 'https://github.com/manjeet13804/whether_app'
    },
    {
      name: 'React Movie Search',
      technologies: ['React.js', 'Movie API', 'CSS3'],
      description: 'Movie search application with detailed movie information. Features include watchlist creation, rating system, movie recommendations, and trailer integration. Implements advanced filtering and sorting options.',
      github: 'https://github.com/manjeet13804/React-Movie-Search'
    },
    {
      name: 'Employee Review System',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Complete employee performance review and feedback system. Features include peer review management, goal tracking, performance metrics, and automated review cycles. Implements customizable review templates and reporting tools.',
      github: 'https://github.com/manjeet13804/employee-review-system'
    },
    {
      name: 'Event Scheduler',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Event management and scheduling application with calendar integration. Features include recurring events, reminder system, attendee management, and conflict detection. Implements multiple calendar view options and event sharing.',
      github: 'https://github.com/manjeet13804/event-sheduler'
    },
    {
      name: 'Habit Tracker',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Application to track and maintain daily habits with progress visualization. Features include streak tracking, habit categories, progress statistics, and reminder notifications. Implements goal setting and achievement rewards.',
      github: 'https://github.com/manjeet13804/habit-tracker'
    },
    {
      name: 'Image Upload MERN',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Image upload and management system with cloud storage integration. Features include bulk upload support, image optimization, folder organization, and sharing capabilities. Implements drag-and-drop interface and image editing tools.',
      github: 'https://github.com/manjeet13804/image-upload-mern'
    },
    {
      name: 'Instagram Clone Frontend',
      technologies: ['React.js', 'Redux', 'CSS3'],
      description: 'Frontend implementation of Instagram with modern UI features. Includes story functionality, post creation, user interactions, and explore feed. Implements infinite scroll and responsive image gallery.',
      github: 'https://github.com/manjeet13804/instaclone-frontend'
    },
    {
      name: 'Instagram Clone Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend API implementation for Instagram clone with authentication. Features include user management, post handling, comment system, and notification service. Implements caching and data optimization.',
      github: 'https://github.com/manjeet13804/instaclone-backend'
    },
    {
      name: 'News App',
      technologies: ['React.js', 'News API', 'CSS3'],
      description: 'Real-time news aggregator with category filtering. Features include personalized news feed, bookmark system, offline reading, and sharing capabilities. Implements content categorization and search functionality.',
      github: 'https://github.com/manjeet13804/news-app'
    },
    {
      name: 'Node Authentication JWT',
      technologies: ['Node.js', 'JWT', 'MongoDB', 'Express.js'],
      description: 'Authentication system using JWT tokens with MongoDB. Features include role-based authorization, password reset, session management, and security logging. Implements OAuth integration and rate limiting.',
      github: 'https://github.com/manjeet13804/node-authentication-jwt-mongodb'
    },
    {
      name: 'Node Todo App',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend implementation of todo application with REST API. Features include task categorization, due date management, priority levels, and subtask support. Implements task sharing and reminder system.',
      github: 'https://github.com/manjeet13804/Node-Todo-App'
    },
    {
      name: 'Post Frontend',
      technologies: ['React.js', 'Redux', 'CSS3'],
      description: 'Social media post management frontend application. Features include post creation, media upload, user interaction, and feed customization. Implements lazy loading and content moderation.',
      github: 'https://github.com/manjeet13804/post-frontend'
    },
    {
      name: 'Post Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend API for social media post management. Features include content handling, user relationships, notification system, and analytics tracking. Implements caching and performance optimization.',
      github: 'https://github.com/manjeet13804/post-backend'
    },
    {
      name: 'React Blog Site',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Full-featured blogging platform with markdown support. Features include rich text editing, comment system, category management, and SEO optimization. Implements social sharing and analytics integration.',
      github: 'https://github.com/manjeet13804/react-blog-site'
    },
    {
      name: 'React Student Management',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Student information and course management system. Features include attendance tracking, grade management, course scheduling, and progress reports. Implements parent portal and academic calendar.',
      github: 'https://github.com/manjeet13804/react-student-management-app'
    },
    {
      name: 'React Chart',
      technologies: ['React.js', 'Chart.js', 'CSS3'],
      description: 'Data visualization application with multiple chart types. Features include real-time data updates, customizable charts, export options, and interactive tooltips. Implements responsive design and animation effects.',
      github: 'https://github.com/manjeet13804/react_chart'
    },
    {
      name: 'React Todo List',
      technologies: ['React.js', 'LocalStorage', 'CSS3'],
      description: 'Feature-rich todo application with local storage persistence. Features include task prioritization, due dates, category labels, and progress tracking. Implements drag-and-drop reordering and dark mode.',
      github: 'https://github.com/manjeet13804/React_Todo_List'
    },
    {
      name: 'Real Estate Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend services for real estate platform with property management. Features include property listing API, user authentication, search functionality, and analytics tracking. Implements image processing and data validation.',
      github: 'https://github.com/manjeet13804/real-estate-backend'
    },
    {
      name: 'Stopwatch',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      description: 'Precise stopwatch application with lap timing features. Features include multiple timers, lap recording, split times, and customizable intervals. Implements background running and sound notifications.',
      github: 'https://github.com/manjeet13804/stopwatch'
    },
    {
      name: 'Superhero Hunter',
      technologies: ['React.js', 'Superhero API', 'CSS3'],
      description: 'Superhero information search and display application. Features include character comparison, power statistics, comic appearances, and favorites list. Implements advanced search filters and character details.',
      github: 'https://github.com/manjeet13804/superhero-hunter'
    },
    {
      name: 'Vendor Registration App',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Vendor management and registration system. Features include vendor profile management, order tracking, payment integration, and reporting tools. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/vender-registration-app'
    },
    {
      name: 'Vendor Registration API',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend API for vendor registration and management. Features include vendor data handling, order management, payment processing, and analytics tracking. Implements caching and performance optimization.',
      github: 'https://github.com/manjeet13804/vendor-registration-api'
    },
    {
      name: 'Book Search',
      technologies: ['React.js', 'Google Books API', 'CSS3'],
      description: 'Book search application with detailed book information. Features include book recommendations, author information, book reviews, and favorites list. Implements advanced search filters and book details.',
      github: 'https://github.com/manjeet13804/book-search'
    },
    {
      name: 'Calculator React',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      description: 'Advanced calculator with scientific operations and history. Features include multiple calculation modes, unit conversion, and customizable themes. Implements keyboard support and result history.',
      github: 'https://github.com/manjeet13804/calculator_using_react'
    },
    {
      name: 'Cloud Comparer',
      technologies: ['React.js', 'Node.js', 'Express.js'],
      description: 'Cloud service comparison tool with detailed analytics. Features include cloud provider comparison, pricing analysis, and feature comparison. Implements data visualization and filtering options.',
      github: 'https://github.com/manjeet13804/CloudComparer'
    },
    {
      name: 'Cloudinary Media Upload',
      technologies: ['React.js', 'Cloudinary API', 'Node.js'],
      description: 'Media upload system with cloud storage integration. Features include image and video upload, media management, and sharing capabilities. Implements drag-and-drop interface and media editing tools.',
      github: 'https://github.com/manjeet13804/Cloudinary-Media-Upload'
    },
    {
      name: 'File Sharing App',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Secure file sharing application with access control. Features include file upload, file sharing, access control, and file management. Implements encryption and data validation.',
      github: 'https://github.com/manjeet13804/file_sharing_app'
    },
    {
      name: 'Grade Calculator',
      technologies: ['React.js', 'JavaScript', 'CSS3'],
      description: 'Academic grade calculation and GPA tracking system. Features include grade calculation, GPA tracking, and progress analysis. Implements data visualization and alert system.',
      github: 'https://github.com/manjeet13804/grade-calculator'
    },
    {
      name: 'Gurkool URL Shortener',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'URL shortening service with click analytics. Features include custom alias creation, QR code generation, click tracking, and detailed analytics dashboard. Implements rate limiting and link expiration functionality.',
      github: 'https://github.com/manjeet13804/gurkool-url-shortner'
    },
    {
      name: 'Kamelon Ecommerce',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Full-featured e-commerce platform with payment integration. Features include product management, order tracking, payment processing, and admin dashboard. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/kamelon-ecomerce'
    },
    {
      name: 'Management Portal',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Business management portal with resource tracking. Features include resource management, project tracking, team management, and reporting tools. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/management-prt'
    },
    {
      name: 'Node Backend Assignments',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Collection of Node.js backend implementation examples. Features include authentication systems, database operations, file handling, and API development. Implements best practices and security measures.',
      github: 'https://github.com/manjeet13804/node-backend-assignments'
    },
    {
      name: 'Polling API',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Real-time polling system with instant results. Features include poll creation, vote tracking, result analysis, and data visualization. Implements caching and performance optimization.',
      github: 'https://github.com/manjeet13804/polling-api'
    },
    {
      name: 'React Autocomplete',
      technologies: ['React.js', 'JavaScript', 'CSS3'],
      description: 'Customizable autocomplete component with search functionality. Features include search suggestions, data filtering, and customizable themes. Implements keyboard support and result highlighting.',
      github: 'https://github.com/manjeet13804/React-AutoComplete'
    },
    {
      name: 'React Hooks Examples',
      technologies: ['React.js', 'Hooks API', 'JavaScript'],
      description: 'Comprehensive examples of React hooks usage. Features include state management, side effects, context API, and custom hooks. Implements best practices and code optimization.',
      github: 'https://github.com/manjeet13804/react-hooks-by-example'
    },
    {
      name: 'React Multiple Files Upload',
      technologies: ['React.js', 'Node.js', 'Express.js'],
      description: 'Multiple file upload system with progress tracking. Features include file upload, progress tracking, and file management. Implements drag-and-drop interface and file editing tools.',
      github: 'https://github.com/manjeet13804/react-multiple-files-upload'
    },
    {
      name: 'Blog Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'Backend API for blog management system. Features include blog post management, comment system, user authentication, and analytics tracking. Implements caching and performance optimization.',
      github: 'https://github.com/manjeet13804/blog-backend'
    },
    {
      name: 'Blogs',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Full-stack blogging platform with user authentication. Features include blog post creation, comment system, user profile management, and analytics tracking. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/blogs'
    },
    {
      name: 'CRUD Feb Prof 23',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'CRUD operations implementation with modern stack. Features include data management, user authentication, and API development. Implements best practices and security measures.',
      github: 'https://github.com/manjeet13804/crudfebprof23'
    },
    {
      name: 'Crypto Market',
      technologies: ['React.js', 'Crypto API', 'Chart.js'],
      description: 'Cryptocurrency market tracking and analysis platform. Features include real-time data updates, customizable charts, and market analysis. Implements data visualization and filtering options.',
      github: 'https://github.com/manjeet13804/crypto-market'
    },
    {
      name: 'Edviron Assignment',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Educational platform assignment implementation. Features include assignment management, grading system, and student tracking. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/edviron-assignment'
    },
    {
      name: 'Edviron School',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'School management system frontend. Features include student management, teacher management, and course management. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/edviron-school'
    },
    {
      name: 'Edviron School API',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      description: 'School management system backend API. Features include student data handling, teacher data handling, and course management. Implements caching and performance optimization.',
      github: 'https://github.com/manjeet13804/edviron-school-api'
    },
    {
      name: 'Expression UI',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      description: 'Custom UI component library with modern design. Features include customizable components, responsive design, and data validation. Implements best practices and code optimization.',
      github: 'https://github.com/manjeet13804/expresion-ui'
    },
    {
      name: 'Mayank Game',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      description: 'Browser-based gaming application. Features include game logic, user input handling, and game rendering. Implements game physics and collision detection.',
      github: 'https://github.com/manjeet13804/Mayank-game'
    },
    {
      name: 'NLKHA',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      description: 'Project management and tracking system. Features include project management, task management, and team management. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/nlkha'
    },
    {
      name: 'Passport',
      technologies: ['Node.js', 'Passport.js', 'Express.js'],
      description: 'Authentication system using Passport.js. Features include user authentication, password reset, and session management. Implements security measures and best practices.',
      github: 'https://github.com/manjeet13804/passport'
    },
    {
      name: 'Profile',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      description: 'Personal portfolio website template. Features include responsive design, customizable layout, and data validation. Implements best practices and code optimization.',
      github: 'https://github.com/manjeet13804/profile'
    },
    {
      name: 'Project MERN Memories',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Social media app for sharing memories. Features include memory sharing, comment system, and user authentication. Implements responsive design and data validation.',
      github: 'https://github.com/manjeet13804/project_mern_memories'
    }
  ],
  github: 'https://github.com/manjeet13804/digital-menu-system'
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
