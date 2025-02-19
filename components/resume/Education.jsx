'use client';
import { motion } from 'framer-motion';
import ResumeSection from './ResumeSection';

const education = [
  {
    id: 1,
    type: 'degree',
    degree: "Bachelor's Degree, Computer Engineering",
    school: 'Kocaeli University',
    period: 'Sep 2014 - Sep 2019',
    description: 'Computer Engineering program with focus on software development and engineering principles.',
  },
  {
    id: 2,
    type: 'course',
    degree: 'JavaScript Bootcamp - Teaching Assistant',
    school: 'Kodluyoruz',
    period: 'Jan 2021 - Mar 2021',
    description: 'Served as a teaching assistant, helping students learn JavaScript fundamentals.',
    certificate: 'https://verified.cv/en/verify/74536311597034'
  },
  {
    id: 3,
    type: 'course',
    degree: 'Frontend Bootcamp - Teaching Assistant',
    school: 'Kodluyoruz',
    period: 'Dec 2020 - Jan 2021',
    description: 'Assisted in teaching frontend development concepts and best practices.',
    certificate: 'https://verified.cv/en/verify/34392260778146'
  },
  {
    id: 4,
    type: 'course',
    degree: 'React Bootcamp - Student',
    school: 'Kodluyoruz',
    period: 'Apr 2020 - May 2020',
    description: 'Intensive React.js training program focusing on modern frontend development.',
    certificate: 'https://verified.cv/tr/verify/135552848264'
  }
];

const Education = () => {
  return (
    <ResumeSection title="Education & Courses">
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
            {edu.certificate && (
              <a 
                href={edu.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 mt-1 inline-block"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Education; 