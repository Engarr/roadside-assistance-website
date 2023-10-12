import React from 'react';
import { motion } from 'framer-motion';

type TitleProps = {
  children: React.ReactNode;
};

const dropDown = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Title = ({ children }: TitleProps) => {
  return (
    <motion.h2
      className=' text-3xl lg:text-4xl mb-[4.25rem] tracking-wider text-[var(--mainColor)] font-bold  w-full text-center'
      variants={dropDown}
      whileInView='animate'
      initial='initial'
      viewport={{
        once: true,
      }}>
      {children}
    </motion.h2>
  );
};

export default Title;
