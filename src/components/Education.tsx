import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    institution: 'Rajarata University of Sri Lanka',
    title: 'Bachelor of Information and Communication Technology (Hons)',
    duration: '2022 - 2026 (4th year)',
    description: 'Currently reading a degree in ICT with a focus on software engineering, data structures, and mobile computing. Gained theoretical knowledge reinforced by practical development experience.',
    icon: <GraduationCap size={20} />
  },
  {
    institution: 'Kegalle Swarna Jayanthi',
    title: 'G.C.E Advanced Level (Technology Stream)',
    duration: 'Completed',
    description: 'Completed my Advanced Level examination focusing on the Technology stream, building a strong academic foundation in technical subjects.',
    icon: <BookOpen size={20} />
  }
];

const Education = () => {
  return (
    <div className="container section" style={{ paddingBottom: '50px', minHeight: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">My <span className="text-gradient">Education</span></h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
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
                <h4 className="edu-institution">{item.institution}</h4>
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

export default Education;
