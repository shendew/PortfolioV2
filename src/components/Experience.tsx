import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Education.css'; // Reusing timeline styles

const experienceData = [
  {
    company: 'Self-Employed',
    title: 'Freelance Mobile App Developer',
    duration: '2020 – Present',
    description: 'Designed and built several personal and client-based Android apps. Managed the full app lifecycle from planning and UI design to coding and deployment.',
    icon: <Briefcase size={20} />
  }
];

const Experience = () => {
  return (
    <div className="container section" id="experience" style={{ paddingBottom: '50px', paddingTop: '50px', minHeight: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">Professional <span className="text-gradient">Experience</span></h2>
        
        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-content glass-panel">
                <h3 className="edu-degree">{item.title}</h3>
                <h4 className="edu-institution">{item.company}</h4>
                <div className="edu-duration">
                  <Calendar size={16} />
                  <span>{item.duration}</span>
                </div>
                <p className="edu-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
