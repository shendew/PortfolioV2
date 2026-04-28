import { motion } from 'framer-motion';
import { Globe, Smartphone, Settings, Cpu } from 'lucide-react';
import './TechStack.css';

const categories = [
  {
    title: 'Web Development',
    icon: <Globe className="stack-icon" />,
    skills: ['React', 'Node.js', 'Express.js', 'Laravel', 'JavaScript']
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="stack-icon" />,
    skills: ['React Native', 'Flutter', 'Dart', 'Android Studio']
  },
  {
    title: 'DevOps & Tools',
    icon: <Settings className="stack-icon" />,
    skills: ['Docker', 'Jenkins', 'Git & GitHub', 'Firebase', 'Figma', 'Postman']
  },
  {
    title: 'IoT & Data',
    icon: <Cpu className="stack-icon" />,
    skills: ['Python', 'Java', 'MongoDB', 'SQLite', 'REST APIs']
  }
];

const TechStack = () => {
  return (
    <div className="container section" id="techstack">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">Technical <span className="text-gradient">Expertise</span></h2>
        
        <div className="modern-stack-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="modern-stack-card glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.4)" }}
            >
              <div className="modern-stack-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="stack-title">{category.title}</h3>
              </div>
              <div className="skill-badges">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
