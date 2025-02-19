'use client';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building modern web applications with React, Next.js, and TypeScript. Focusing on performance, accessibility, and responsive design.',
    skills: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    icon: '💻',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications using React Native. Experience with state management and native device features.',
    skills: ['React Native', 'Redux', 'Native APIs', 'Mobile UI'],
    icon: '📱',
  },
  {
    id: 3,
    title: 'UI/UX Development',
    description: 'Implementing pixel-perfect designs with modern CSS techniques. Building reusable component libraries and design systems.',
    skills: ['Tailwind CSS', 'Styled Components', 'Figma', 'Design Systems'],
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed and efficiency. Implementing best practices for loading, rendering, and user experience.',
    skills: ['Core Web Vitals', 'SEO', 'Code Splitting', 'Caching'],
    icon: '⚡',
  },
  {
    id: 5,
    title: 'Micro Frontend Architecture',
    description: 'Building scalable applications with micro frontend architecture. Experience with module federation and shared dependencies.',
    skills: ['Module Federation', 'Webpack', 'Shared State', 'Micro Apps'],
    icon: '🔄',
  },
  {
    id: 6,
    title: 'Technical Consulting',
    description: 'Providing technical guidance and solutions. Helping teams adopt best practices and modern development workflows.',
    skills: ['Code Reviews', 'Architecture', 'Best Practices', 'Team Training'],
    icon: '🤝',
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid; 