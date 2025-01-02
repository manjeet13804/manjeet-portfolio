import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setActiveSection } from '../redux/portfolioSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.portfolio.theme);
  const activeSection = useSelector((state) => state.portfolio.activeSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    dispatch(setActiveSection(section));
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">
        <Link to="/">Manjeet Panghal</Link>
      </div>
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          Home
        </Link>
        <Link 
          to="/about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleNavClick('about')}
        >
          About
        </Link>
        <Link 
          to="/experience"
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={() => handleNavClick('experience')}
        >
          Experience
        </Link>
        <Link 
          to="/projects"
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </Link>
        <Link 
          to="/skills"
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => handleNavClick('skills')}
        >
          Skills
        </Link>
        <Link 
          to="/contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </Link>
      </div>
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
