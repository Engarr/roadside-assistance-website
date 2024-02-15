import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type TitleProps = {
  children: React.ReactNode;
  textSize?: string;
  mb?: string;
  style?: string;
};

export const dropDownVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Title = ({
  children,
  style,
  textSize = 'text-3xl lg:text-4xl',
  mb = ' mb-[4.25rem]',
}: TitleProps) => {
  return (
    <motion.h2
      className={clsx(
        'tracking-tight text-[var(--mainColor)] font-bold  w-full text-center px-1 lg:px-0',
        textSize,
        mb,
        style
      )}
      variants={dropDownVariants}
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
