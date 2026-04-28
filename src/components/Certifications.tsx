import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ScrollText, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Education.css'; 

interface CertData {
  id: string;
  issuer: string;
  title: string;
  year: string;
  icon: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ScrollText':
      return <ScrollText size={20} />;
    case 'Award':
    default:
      return <Award size={20} />;
  }
};

const Certifications = () => {
  const [certData, setCertData] = useState<CertData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "certifications"));
        const certList = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })) as CertData[];
        setCertData(certList);
      } catch (err) {
        console.error("Failed to fetch certs...", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCerts();
  }, []);

  return (
    <div className="container section" id="certifications" style={{ paddingTop: '50px', minHeight: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">Licenses & <span className="text-gradient">Certifications</span></h2>
        
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
            <Loader2 className="spinner" size={30} color="var(--accent-primary)" style={{ animation: 'spin 2s linear infinite' }} />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            <AnimatePresence>
              {certData.map((cert, index) => (
                <motion.div 
                  key={cert.id} 
                  className="glass-panel"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="timeline-icon" style={{ position: 'static', margin: 0 }}>
                    {getIcon(cert.icon)}
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{cert.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Certifications;
