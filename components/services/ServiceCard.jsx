'use client';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-[#00ff99]/50 transition-colors"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#00ff99]">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard; 