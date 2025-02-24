'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import React, { Suspense } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Photo = dynamic(() => import('@/components/photo'), {
  loading: () => (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      className="w-full aspect-square bg-neutral-800/30 rounded-2xl"
    />
  ),
  ssr: false
});

const Socials = dynamic(() => import('@/components/socials'), {
  loading: () => (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      className="flex gap-4"
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-9 h-9 rounded-full bg-neutral-800/30" />
      ))}
    </motion.div>
  )
});

const Stats = dynamic(() => import('@/components/stats'), {
  loading: () => (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      className="grid grid-cols-3 gap-4"
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-24 bg-neutral-800/30 rounded-xl" />
      ))}
    </motion.div>
  )
});

const MatrixText = dynamic(() => import('@/components/matrix-text'), {
  loading: () => (
    <motion.span
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      className="inline-block bg-neutral-800/30 rounded h-[1em] w-[200px]"
    />
  )
});


const preloadImage = (src) => {
  if (typeof window !== 'undefined') {
    const img = new Image();
    img.src = src;
  }
};

const Home = () => {
  React.useEffect(() => {
    preloadImage('/assets/profile.jpg');
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full min-h-[calc(100vh-96px)] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              <div className="text-center xl:text-left order-2 xl:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <span className="px-4 py-2 rounded-full bg-[#00ff99]/10 text-[#00ff99] border border-[#00ff99]/20 text-sm font-medium">
                      Frontend Engineer
                    </span>
                  </motion.div>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                    Hello, I&apos;m{' '}
                    <span className="text-[#00ff99] relative">
                      <Suspense fallback={
                        <motion.span
                          initial={{ opacity: 0.6 }}
                          animate={{ opacity: 0.8 }}
                          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                          className="inline-block bg-neutral-800/30 rounded h-[1em] w-[200px]"
                        />
                      }>
                        <MatrixText text="Tolunay Tezcan" className="inline-block" />
                      </Suspense>
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-[#00ff99]/30"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1 }}
                      />
                    </span>
                  </h1>
                  <p className="text-lg text-neutral-400 max-w-[600px] mx-auto xl:mx-0 mb-8 leading-relaxed">
                    A passionate front-end engineer crafting engaging web and mobile experiences.
                    Specializing in React ecosystem with a focus on performance, accessibility, and modern design principles.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-8 xl:justify-start">
                    <Link href="/resume" prefetch>
                      <Button
                        variant="outline"
                        size="lg"
                        className="group w-full sm:w-auto bg-[#00ff99] text-neutral-900 hover:bg-[#00ff99]/90 border-none flex items-center gap-2 relative overflow-hidden transition-all duration-300"
                      >
                        <span>View Resume</span>
                        <FiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/contact" prefetch>
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
                  <Suspense fallback={
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                      className="flex gap-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-neutral-800/30" />
                      ))}
                    </motion.div>
                  }>
                    <Socials />
                  </Suspense>
                </motion.div>
              </div>
              <motion.div
                className="order-1 xl:order-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <Suspense fallback={
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                      className="w-full aspect-square bg-neutral-800/30 rounded-2xl"
                    />
                  }>
                    <Photo />
                  </Suspense>
                </div>
                <div className="absolute -inset-4 bg-[#00ff99]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#00ff99]/10 via-transparent to-transparent rounded-full blur-2xl" />
              </motion.div>
            </div>

            <div className="mt-16">
              <Suspense fallback={
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-24 bg-neutral-800/30 rounded-xl" />
                  ))}
                </motion.div>
              }>
                <Stats />
              </Suspense>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
