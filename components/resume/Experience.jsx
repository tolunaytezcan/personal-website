import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2021 - Present',
    description: 'Led development of modern web applications using React, Next.js, and TypeScript. Implemented responsive designs and optimized performance.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    description: 'Developed and maintained client websites, created reusable components, and collaborated with design team on UI/UX implementations.',
  },
];

const Experience = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience; 