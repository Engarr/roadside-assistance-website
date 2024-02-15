import React from 'react';
import { motion } from 'framer-motion';
import { BsThreeDots } from 'react-icons/bs';

type DescriptionProps = {
  children: React.ReactNode;
  index: number;
};
const slideAnimation = {
  initial: () => ({
    opacity: 0,
  }),
  slide: (index: number) => ({
    opacity: 1,
    transition: { delay: index * 0.125 },
  }),
};

const Description = ({ children, index }: DescriptionProps) => {
  return (
    <>
      <motion.p
        className='mb-2'
        variants={slideAnimation}
        whileInView='slide'
        initial='initial'
        viewport={{
          once: true,
        }}
        custom={index}>
        {children}
      </motion.p>
      <motion.div
        variants={slideAnimation}
        whileInView='slide'
        initial='initial'
        viewport={{
          once: true,
        }}
        custom={index}>
        <BsThreeDots className='text-[var(--mainColor)] text-2xl my-2' />
      </motion.div>
    </>
  );
};

export default Description;
