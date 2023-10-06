import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/context/scroll-position-context';
import { IoIosArrowDown } from 'react-icons/io';

const Scroll = () => {
  const { scrollPositionY } = useScrollPosition();
  const scrollCss = scrollPositionY > 200 ? 'hidden' : 'block';

  return (
    <motion.div
      className={`${scrollCss} absolute top-[60%] lg:top-[65%] right-[50%] translate-x-1/2 w-[35px] h-[50px] lg:w-[40px] lg:h-[60px] border-2 border-white rounded-3xl transition-all`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 1,
        repeatDelay: 0.8,
      }}>
      <motion.div
        className={`${scrollCss} absolute w-[10px] h-[10px] bg-white rounded-full right-[50%] translate-x-1/2 top-2 lg:top-3`}
        initial={{ opacity: 1, y: 0, x: '50%' }}
        animate={{ opacity: [0, 1, 0], y: 5, x: '50%' }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 1,
          repeatDelay: 0.8,
        }}
      />
      <motion.div
        className='absolute  text-white/60 -bottom-[50%] right-[50%]  text-3xl'
        initial={{ opacity: 1, y: 0, x: '50%' }}
        animate={{ opacity: [0.5, 0.8, 1, 0], y: 7, x: '50%' }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 1,
          repeatDelay: 0.8,
        }}>
        <IoIosArrowDown />
      </motion.div>
    </motion.div>
  );
};

export default Scroll;
