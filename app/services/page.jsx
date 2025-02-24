'use client';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/services/ServicesGrid';
import PageTitle from '@/components/common/PageTitle';
import AnimatedContainer from '@/components/common/AnimatedContainer';

const Services = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-center">
      <div className="container mx-auto px-4 pb-16 lg:px-8">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <PageTitle title="My Services" subtitle="How can I help you?" />
            <div className="mt-6">
              <ServicesGrid />
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Services;
