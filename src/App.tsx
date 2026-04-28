import { useState, useEffect } from 'react';
import Info from './components/Info';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import './index.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <Toaster position="bottom-right" />
      {/* Dynamic Background Glow following mouse cursor */}
      <div 
        className="bg-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          position: 'fixed'
        }}
      />
      
      <Navbar />
      
      <main>
        <section id="info">
          <Info />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="education">
          <Education />
        </section>
        <Experience />
        <Certifications />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
