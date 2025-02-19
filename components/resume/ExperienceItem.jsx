'use client';
import { motion } from 'framer-motion';

export const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-l-2 border-[#00ff99] pl-4"
    >
      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
      <p className="text-[#00ff99] mb-2">{experience.company} | {experience.period}</p>
      <p className="text-neutral-400">{experience.description}</p>
    </motion.div>
  );
}; 