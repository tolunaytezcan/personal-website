'use client';
import { motion } from 'framer-motion';
import ResumeSection from './ResumeSection';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Figma', 'Docker']
  }
];

const Skills = () => {
  return (
    <ResumeSection title="Skills">
      <div className="space-y-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="border-l-2 border-[#00ff99] pl-4"
          >
            <h3 className="text-xl font-bold text-[#00ff99] mb-4">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, index) => (
                <li key={index} className="text-neutral-400">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Skills; 