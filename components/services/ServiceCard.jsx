'use client';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, skills }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-[#00ff99]/50 transition-all duration-300 flex flex-col"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-[#00ff99]">{title}</h3>
      <p className="text-neutral-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-neutral-800 text-[#00ff99] rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard; 