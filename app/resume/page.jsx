'use client';

import PageTitle from '@/components/common/PageTitle';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Skills from '@/components/resume/Skills';
import AnimatedContainer from '@/components/common/AnimatedContainer';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-center">
      <div className="container mx-auto px-4 pb-16 lg:px-8">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <PageTitle 
              title="Resume" 
              subtitle="My Professional Background" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                  <Experience />
                </div>
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                  <Education />
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 sticky top-24">
                  <Skills />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Resume;
