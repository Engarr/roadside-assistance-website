import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

const Scroll = () => {
  return (
    <Link
      href='/#onas'
      className='text-[var(--mainColor)] z-[90] cursor-pointer text-4xl'>
      <motion.div
        className={` absolute top-[70%] lg:top-[65%] right-[50%] translate-x-1/2 z-[900] bg-black/10 rounded-full p-2 overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 40 }}
          transition={{
            repeat: Infinity,

            duration: 2,
            repeatType: 'loop',
            ease: 'linear',
          }}>
          <IoIosArrowDown />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Scroll;
