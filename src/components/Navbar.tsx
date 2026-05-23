import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
