import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuPhone } from 'react-icons/lu';
import { handleCall } from '@/lib/utils';

const CallBtn = () => {
  const controls = useAnimation();

  const handleMouseEnterControls = () => {
    controls.start('hover');
  };

  const handleMouseLeaveControls = () => {
    controls.start('initial');
  };

  const textVariants = {
    hover: {
      opacity: 1,
      transition: { delay: 0.2 },
    },
    initial: {
      opacity: 0,
    },
  };
  const phoneIconVariants = {
    hover: {
      opacity: 0,
    },
    initial: {
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className='hidden lg:flex absolute bottom-0 right-0 bg-[var(--mainColor)]  w-[50px] h-[50px] z-40 m-4 rounded-full'
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ width: 300 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}>
        <div className='relative w-full h-full font-semibold '>
          <motion.p
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-[var(--background)] '
            variants={phoneIconVariants}
            initial='initial'
            animate={controls}>
            <LuPhone className='' />
          </motion.p>
          <motion.p
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-[var(--text-main-dark)] cursor-pointer'
            variants={textVariants}
            initial='initial'
            animate={controls}>
            608-450-246
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className='lg:hidden flexCenter absolute bottom-0 right-0 bg-[var(--mainColor)]  w-[50px] h-[50px] z-40 m-4 rounded-full '
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={handleCall}>
        <div className='relative w-full h-full font-semibold '>
          <motion.p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-[var(--background)] '>
            <LuPhone />
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default CallBtn;
