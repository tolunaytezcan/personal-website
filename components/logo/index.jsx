'use client';
import Link from 'next/link';
import { FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Logo = () => {
  const glitchEffect = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: [0.8, 1, 0.7],
      x: [0, -1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.1,
      },
    },
  };
  <></>;
  return (
    <>
      <Link
        href='/'
        className='text-2xl bg-primary rounded-xl   p-1 font-semibold flex items-center cursor-pointer'
      >
        <AnimatePresence mode='sync'>
          <motion.span
            className='flex items-center gap-2 text-white mr-2 tracking-wide'
            variants={glitchEffect}
            initial='hidden'
            animate='visible'
          >
            <span className='flex'>
              <FaChevronLeft className=' text-accent w-3 h-5' />
              <FaChevronRight className=' text-accent w-3 h-5' />
            </span>
            Tolunay
            <FaCode className='text-accent w-6 h-6 ' />
          </motion.span>
        </AnimatePresence>
      </Link>
    </>
  );
};

export default Logo;
