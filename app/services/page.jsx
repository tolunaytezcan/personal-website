'use client';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/services/ServicesGrid';
import PageTitle from '@/components/common/PageTitle';

const Services = () => {
  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[1440px] mx-auto"
        >
          <PageTitle title="My Services" subtitle="How can I help you?" />
          <div className="mt-8">
            <ServicesGrid />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
