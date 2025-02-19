'use client';

import PageTitle from '@/components/common/PageTitle';
import AnimatedContainer from '@/components/common/AnimatedContainer';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Hepsiburada Checkout',
    description: 'Redesigned and developed the new checkout experience (New OPC) for Hepsiburada, one of Turkey\'s largest e-commerce platforms. The project significantly improved user experience and performance.',
    image: '/assets/hepsiburada-checkout.png',
    technologies: ['React', 'TypeScript', 'Zustand', 'Micro Frontends', 'Voltran'],
    liveUrl: 'https://checkout.hepsiburada.com',
  },
  {
    id: 2,
    title: 'GittiGidiyor Product Detail',
    description: 'Built the new product detail page for GittiGidiyor (eBay Turkey) using modern technologies and atomic design principles. Implemented product comparison and review features.',
    image: '/assets/gittigidiyor-product.png',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Apollo Client', 'SSR/SSG'],
    liveUrl: 'https://www.gittigidiyor.com',
  },
  {
    id: 3,
    title: 'Ziraat Bank Financial Screens',
    description: 'Developed financial interface screens for TC Ziraat Bank, Turkey\'s largest state-owned bank. The project focused on modernizing the bank\'s digital presence.',
    image: '/assets/ziraat-screens.png',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
  },
  {
    id: 4,
    title: 'Digital Wallet Apps',
    description: 'Developed multiple digital wallet mobile applications (Hayat and Poca) using React Native. These apps are currently live and being used by customers.',
    image: '/assets/wallet-apps.png',
    technologies: ['React Native', 'Redux Toolkit', 'Context API', 'SASS'],
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800 hover:border-accent/50 transition-colors"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-900 rounded-full text-accent hover:bg-accent hover:text-neutral-900 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-900 rounded-full text-accent hover:bg-accent hover:text-neutral-900 transition-colors"
            >
              <FiExternalLink className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-neutral-800 text-accent rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Work() {
  return (
    <div className="min-h-screen w-full flex items-start justify-center pt-8">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <PageTitle 
              title="Projects" 
              subtitle="Some Projects I've Built" 
            />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}
