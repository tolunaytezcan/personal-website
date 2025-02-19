'use client';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern and responsive web applications',
    icon: '💻',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native iOS and Android applications',
    icon: '📱',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-friendly and visually appealing designs',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Consulting',
    description: 'Technical consulting and project management',
    icon: '🤝',
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid; 