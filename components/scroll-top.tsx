'use client';

import { useScrollPosition } from '@/context/scroll-position-context';
import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollTop = () => {
  const { scrollPositionY } = useScrollPosition();

  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {scrollPositionY > 300 && (
        <motion.div
          onClick={scrollToTopHandler}
          className='fixed right-0 lg:right-5 bottom-[5rem] lg:bottom-5 z-[990] bg-black/20 rounded-full p-[0.2rem] lg:p-2 cursor-pointer mr-4 w-[50px]]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}>
          <IoIosArrowUp className='text-3xl text-[var(--mainColor)]' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
