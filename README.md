# Professional Portfolio

A modern, responsive portfolio website built with React, styled-components, and framer-motion. This portfolio showcases my skills, experience, and projects in an elegant and interactive way.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions
- 🌙 Light/Dark theme support
- 🎯 Interactive skill progress bars
- ⌛ Beautiful timeline for experience
- 🔍 SEO optimized
- ⚡ Performance optimized

## Tech Stack

- **Frontend Framework**: React.js
- **Styling**: styled-components
- **Animations**: framer-motion
- **State Management**: Redux
- **Icons**: react-icons
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Project Structure

```
portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── styles/          # Global styles and theme
│   ├── store/          # Redux store configuration
│   ├── utils/          # Utility functions
│   └── App.js          # Root component
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
cd portfolio
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Components

### Home
- Hero section with animated introduction
- Social media links
- Profile image with animation
- Call-to-action buttons

### Skills
- Interactive skill cards
- Progress bars with animations
- Categorized skills (Frontend, Backend, Tools)
- Responsive grid layout

### Experience
- Timeline layout
- Animated job cards
- Company details with icons
- Technology tags

### Navbar
- Responsive navigation
- Mobile menu with smooth transitions
- Resume download button
- Active link indicators

## Customization

### Theme
The theme can be customized in `src/styles/theme.js`. This includes:
- Colors
- Typography
- Spacing
- Breakpoints
- Shadows
- Border radius
- Transitions

### Content
Update your personal information in the respective component files:
- `src/components/Home.js` - Personal introduction
- `src/components/Skills.js` - Skills and proficiency
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Project showcase

## Performance Optimization

- Lazy loading of images
- Code splitting
- Optimized animations
- Minimized bundle size
- Efficient state management

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
