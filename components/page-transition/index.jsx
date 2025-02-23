'use client';

import { AnimatePresence, delay, easeInOut, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {  duration: 0.3, ease: easeInOut },
          }}
          className='h-screen w-screen fixed top-0 pointer-events-none bg-primary'
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
