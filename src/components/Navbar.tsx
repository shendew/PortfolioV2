import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#info" className="brand">
          <span className="text-gradient" style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Outfit' }}>
            SD.
          </span>
        </a>
        <div className="nav-links">
          <a href="#info" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#techstack" className="nav-link">Stack</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link btn-small">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
