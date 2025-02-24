'use client';

import Photo from '@/components/photo';
import Socials from '@/components/socials';
import Stats from '@/components/stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import AnimatedContainer from '@/components/common/AnimatedContainer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-96px)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              <div className="text-center xl:text-left order-2 xl:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4"
                  >
                    <span className="px-4 py-2 rounded-full bg-[#00ff99]/10 text-[#00ff99] border border-[#00ff99]/20 text-sm font-medium">
                      Frontend Engineer
                    </span>
                  </motion.div>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                    Hello, I&apos;m{' '}
                    <span className="text-[#00ff99] relative">
                      Tolunay Tezcan
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-[#00ff99]/30"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </span>
                  </h1>
                  <p className="text-lg text-neutral-400 max-w-[600px] mx-auto xl:mx-0 mb-8 leading-relaxed">
                    A passionate front-end engineer crafting engaging web and mobile experiences.
                    Specializing in React ecosystem with a focus on performance, accessibility, and modern design principles.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-8 xl:justify-start ">
                    <Link href="/resume">
                      <Button
                        variant="outline"
                        size="lg"
                        className="group w-full sm:w-auto bg-[#00ff99] text-neutral-900 hover:bg-[#00ff99]/90 border-none flex items-center gap-2 relative overflow-hidden transition-all duration-300"
                      >
                        <span>View Resume</span>
                        <FiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99]/10 flex items-center gap-2"
                      >
                        <span>Get in Touch</span>
                      </Button>
                    </Link>
                    <div className="hidden sm:block h-8 w-px bg-neutral-800" />
                  </div>
                  <Socials />
                </motion.div>
              </div>
              <motion.div
                className="order-1 xl:order-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative z-10">
                  <Photo />
                </div>
                <div className="absolute -inset-4 bg-[#00ff99]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#00ff99]/10 via-transparent to-transparent rounded-full blur-2xl" />
              </motion.div>
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Stats />
            </motion.div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Home;
