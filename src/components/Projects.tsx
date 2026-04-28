import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  image: string;
  order: number;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const projectsList = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })) as Project[];
        setProjects(projectsList);
      } catch (err) {
        console.error("Failed to fetch projects...", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="container section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">Featured <span className="text-gradient">Projects</span></h2>
        
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loader2 className="spinner" size={40} color="var(--accent-primary)" style={{ animation: 'spin 2s linear infinite' }} />
          </div>
        ) : (
          <>
            <motion.div layout className="projects-grid">
              <AnimatePresence>
                {displayedProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.1 }}
                    className="project-card glass-panel"
                    whileHover={{ y: -10 }}
                  >
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="project-overlay" />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((t, i) => (
                          <span key={i} className="tech-badge">{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noreferrer" className="social-icon">
                          <FaGithub size={20} />
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer" className="social-icon">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {projects.length > 6 && (
              <motion.div 
                style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button 
                  className="btn btn-outline" 
                  onClick={() => setShowAll(!showAll)}
                  style={{ width: '200px', justifyContent: 'center' }}
                >
                  {showAll ? 'Show Less' : 'See More'}
                </button>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
