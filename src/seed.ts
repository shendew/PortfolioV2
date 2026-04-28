import { db } from './firebase.js';
import { doc, setDoc } from 'firebase/firestore';

const certData = [
  {
    id: "cert_devops",
    issuer: 'Simplilearn',
    title: 'Introduction to DevOps Tools',
    year: '2026',
    icon: 'Award'
  },
  {
    id: "cert_dsa",
    issuer: 'Simplilearn',
    title: 'Basics of Data Structures and Algorithms',
    year: '2025',
    icon: 'ScrollText'
  },
  {
    id: "cert_agile",
    issuer: 'Simplilearn',
    title: 'Agile Scrum Master',
    year: '2025',
    icon: 'Award'
  }
];

const projectsData = [
  {
    id: "proj_biz",
    title: 'BizBudget - Intelligent Finance Platform',
    description: 'Gen-AI finance platform automating personal expense management. Features real-time Smart Receipt Scanning using OCR and LLMs for data extraction, providing automated reports.',
    tech: ['MERN', 'Gen AI', 'DeepSeek AI', 'Tesseract OCR'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    order: 1
  },
  {
    id: "proj_ebuy",
    title: 'Ebuy Ecommerce Cross-Platform',
    description: 'Fully functional e-commerce solution with synchronized mobile and web applications. Features a seamless shopping experience and Payhere payment gateway integration.',
    tech: ['React Native', 'MERN Stack', 'MongoDB', 'NodeJS'],
    github: 'https://github.com/shendew',
    link: '#',
    image: '/ecommerce_app_ui.png',
    order: 2
  },
  {
    id: "proj_iot",
    title: 'IoT-Based Shared Bicycle System',
    description: 'IoT-driven mobility solution featuring real-time GPS tracking and QR code unlocking for sustainable urban transport using Flutter mobile interface and Firebase.',
    tech: ['Flutter', 'Firebase', 'IoT'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    order: 3
  },
  {
    id: "proj_covid",
    title: 'Dew Covid Report Mobile',
    description: 'A mobile application developed during the COVID-19 pandemic to provide real-time updates regarding total cases, recoveries, and local statistics using data from the APIs.',
    tech: ['Java', 'REST API', 'Dart', 'Flutter'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80',
    order: 4
  },
  {
    id: "proj_ninja",
    title: 'Ninja Network Laravel',
    description: 'Production-ready network management platform featuring a robust PHP backend and Blade templating. Containerized with Docker to ensure consistent deployment.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Blade'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    order: 5
  },
  {
    id: "proj_face",
    title: 'Face Detention Attendance System',
    description: 'Biometric attendance system to identify students in real-time via computer vision. Integrates MongoDB and a CustomTkinter GUI.',
    tech: ['Python', 'OpenCV', 'Face_Recognition', 'CustomTkinter'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
    order: 6
  },
  {
    id: "proj_user",
    title: 'User Management Backend',
    description: 'Secure RESTful backend for enterprise-grade user and role management implementing RBAC, input validation, and full CRUD operations (Spring Boot).',
    tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'Maven'],
    github: 'https://github.com/shendew',
    link: '#',
    image: '/cinnamon_backend_api.png',
    order: 7
  },
  {
    id: "proj_raja",
    title: 'Rajarata Community',
    description: 'A community-driven mobile app to streamline information sharing for Rajarata University, providing students with real-time access to campus news.',
    tech: ['Java', 'Git', 'Firebase'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    order: 8
  },
  {
    id: "proj_stock",
    title: 'Stock Management App',
    description: 'Cross-platform inventory system featuring a dashboard for CRUD operations, purchase tracking, and stock releases. Optimized via SQLite for real-time analytics.',
    tech: ['Dart', 'Flutter', 'SQLite'],
    github: 'https://github.com/shendew',
    link: '#',
    image: '/food_safety_dashboard.png',
    order: 9
  },
  {
    id: "proj_uni",
    title: 'Unicode Legacy Converter',
    description: 'Utility-focused mobile application designed to convert Unicode font input into legacy font formats. Ensuring high compatibility for local font standards.',
    tech: ['Java', 'Android Studio'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    order: 10
  },
  {
    id: "proj_green",
    title: 'GreenWorld-AR Mobile',
    description: 'Mobile AR application to showcase professional milestones in an immersive 3D environment, designing custom 3D models and using AR Core.',
    tech: ['Unity', 'AR Core', 'C#'],
    github: 'https://github.com/shendew',
    link: '#',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80',
    order: 11
  }
];

async function seed() {
  console.log("Starting DB seed...");
  try {
    for (const cert of certData) {
      await setDoc(doc(db, "certifications", cert.id), cert);
    }
    console.log("Certifications seeded!");

    for (const proj of projectsData) {
      await setDoc(doc(db, "projects", proj.id), proj);
    }
    console.log("Projects seeded!");
  } catch(e) {
    console.error("Error seeding:", e);
    // @ts-ignore
    process.exit(1);
  }
  // @ts-ignore
  process.exit(0);
}

seed();
