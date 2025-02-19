'use client';
import { motion } from 'framer-motion';
import ResumeSection from './ResumeSection';

const skills = [
  {
    category: 'Tech Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'GraphQL', 'Vue.js', 'Node.js']
  },
  {
    category: 'State Management & Data Fetching',
    items: ['React-Query', 'Zustand', 'Apollo Client', 'Redux']
  },
  {
    category: 'Styling',
    items: ['SCSS', 'Styled Components', 'Tailwind CSS', 'CSS Modules']
  },
  {
    category: 'Tooling & Build Systems',
    items: ['Webpack', 'Babel', 'Vite']
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress']
  },
  {
    category: 'UI & Design',
    items: ['Storybook', 'Design System Libraries', 'Figma', 'Sketch']
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'CI/CD', 'RESTful APIs', 'Micro Frontends', 'Web Accessibility (a11y)', 'Performance Optimization']
  },
  {
    category: 'Languages',
    items: ['English (Professional, Fluent)', 'German (Beginner)', 'Turkish (Native)']
  }
];

const Skills = () => {
  return (
    <ResumeSection title="Skills">
      <div className="space-y-6">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#00ff99] mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 py-1 text-sm bg-neutral-800/50 text-neutral-300 rounded-full border border-neutral-700 hover:border-[#00ff99] hover:text-[#00ff99] transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Skills; 