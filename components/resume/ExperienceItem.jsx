'use client';
import { motion } from 'framer-motion';

export const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-800">
        <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-[#00ff99]" />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
        <span className="hidden md:block text-neutral-500">•</span>
        <p className="text-[#00ff99]">{experience.company}</p>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
        <span>{experience.period}</span>
        <span>•</span>
        <span>{experience.location}</span>
      </div>
      
      <p className="text-neutral-400 leading-relaxed">{experience.description}</p>
    </motion.div>
  );
}; 