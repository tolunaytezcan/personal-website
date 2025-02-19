'use client';
import { motion } from 'framer-motion';
import ResumeSection from './ResumeSection';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2015 - 2019',
    description: 'Focus on software engineering and web technologies. Graduated with honors.',
  },
];

const Education = () => {
  return (
    <ResumeSection title="Education">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-[#00ff99] pl-4"
          >
            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <p className="text-[#00ff99] mb-2">{edu.school} | {edu.period}</p>
            <p className="text-neutral-400">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Education; 