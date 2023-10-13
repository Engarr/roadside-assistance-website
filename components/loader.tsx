import React from 'react';
import { motion } from 'framer-motion';
import { roboto_mono } from '@/lib/fonts';

const Loader = () => {
  return (
    <motion.div className='flexCenter h-full flex-col'>
      <motion.div
        className='h-[20px] w-[20px] bg-[var(--mainColor)] rounded-full'
        initial={{ x: 0, y: 0 }}
        animate={{ x: 0, y: [-20, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 0.5,
          ease: 'easeOut',
        }}></motion.div>
      <motion.div
        className='w-[30px] bg-[var(--mainColor)] bg-opacity-10 h-[2px] rounded-2xl'
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: [0, 0.5, 0.5, 0],
          width: [0, 30, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeOut',
          repeatDelay: 0.4,
        }}></motion.div>
      <p className={`${roboto_mono.className}`}>Pobieranie mapy...</p>
    </motion.div>
  );
};

export default Loader;
