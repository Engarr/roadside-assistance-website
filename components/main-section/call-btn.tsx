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

  return (
    <>
      <motion.div
        className='flexCenter fixed bottom-0 right-0 bg-[var(--mainColor)] w-[50px] h-[50px]  lg:w-[60px] lg:h-[60px] z-50 m-4 rounded-full cursor-pointer'
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '2px 2px 0 var(--mainColorOpacity60)',
        }}
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
