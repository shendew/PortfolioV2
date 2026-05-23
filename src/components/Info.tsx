import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myImage from '../assets/my.png';
import './Info.css';

const Info = () => {
  return (
    <div className="container section info-section">
      <div className="info-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-body" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="wave">👋</span> Hello, I'm
          </h2>
          <h1 className="heading-lg">
            Shehara <span className="text-gradient">Dewanagala</span>
          </h1>
          <h3 className="subheading" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Mobile Developer & Undergraduate at RUSL
          </h3>
          <p className="text-body" style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            I am an undergraduate at Rajarata University of Sri Lanka, pursuing a BICT (Hons) degree with over 4 years of experience as a Mobile Application Developer. I specialize in building high-performance Android and cross-platform solutions using Flutter, React Native, and Native Java. With expertise in integrating AI, IoT, and Biometrics, I am committed to delivering scalable, user-centric digital products.
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/shendew" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shehara-dewanagala-287857189/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:dev.shehara@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="info-image-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={myImage} alt="Shehara Dewanagala" className="info-image" />
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} color="var(--text-secondary)" />
      </motion.div>
    </div>
  );
};

export default Info;
