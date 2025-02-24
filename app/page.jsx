'use client';

import Photo from '@/components/photo';
import Socials from '@/components/socials';
import Stats from '@/components/stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import AnimatedContainer from '@/components/common/AnimatedContainer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="w-full flex items-start justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
              <div className="text-center xl:text-left order-2 xl:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xl text-[#00ff99]">Frontend Engineer</span>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 mb-4">
                    Hello, I&apos;m{' '}
                    <span className="text-[#00ff99]">Tolunay Tezcan</span>
                  </h1>
                  <p className="text-lg text-neutral-400 max-w-[600px] mx-auto xl:mx-0 mb-6">
                    I am a front-end engineer focused on creating engaging web and
                    mobile applications using React and React Native. I prioritize
                    user experience and always look for ways to improve my skills and
                    keep up with industry trends.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start">
                    <Link href="/resume">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto bg-[#00ff99] text-neutral-900 hover:bg-[#00ff99]/90 border-none flex items-center gap-2"
                      >
                        <span>Download CV</span>
                        <FiDownload className="text-xl" />
                      </Button>
                    </Link>
                    <Socials />
                  </div>
                </motion.div>
              </div>
              
              <div className="order-1 xl:order-2">
                <Photo />
              </div>
            </div>

            <div className="mt-6 xl:mt-8">
              <Stats />
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Home;
