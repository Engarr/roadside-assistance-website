import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/context/scroll-position-context';
import { IoIosArrowDown } from 'react-icons/io';

const Scroll = () => {
  const { scrollPositionY } = useScrollPosition();
  const scrollCss = scrollPositionY > 200 ? 'opacity-0' : 'opacity-1';

  return (
    <motion.div
      className={`${scrollCss} absolute top-[60%] lg:top-[65%] right-[50%] translate-x-1/2 w-[55px] h-[70px] lg:w-[80px] lg:h-[60px] border-2 border-white/30 rounded-xl transition-all`}>
      <motion.div
        className='absolute  text-white/60 bottom-[20%] right-[50%]  text-3xl'
        initial={{ opacity: 0, y: 0, x: '50%' }}
        animate={{ opacity: 1, y: 15, x: '50%' }}
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
