'use client';

import { imagesPaths } from '@/lib/data';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import SwitchButton from './switch-button';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1500 : -1500,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1500 : -1500,
    };
  },
};
const swipeConfidenceThreshold = 1500;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const PhotoSlider = () => {
  const [[photoIndex, direction], setPhotoIndex] = useState([0, 0]);
  const imageIndex =
    ((photoIndex % imagesPaths.length) + imagesPaths.length) %
    imagesPaths.length;

  const photoHandler = (newDirection: number) => {
    setPhotoIndex([photoIndex + newDirection, newDirection]);
  };
  return (
    <>
      <div className='w-full flexCenter relative left-1/2 -translate-x-1/2  mb-4 gap-20 lg:gap-10'>
        <SwitchButton arrowDirection={-5} onClick={() => photoHandler(-1)}>
          <AiOutlineArrowLeft />
        </SwitchButton>
        <SwitchButton arrowDirection={5} onClick={() => photoHandler(1)}>
          <AiOutlineArrowRight />
        </SwitchButton>
      </div>
      <motion.div className=' relative left-1/2 -translate-x-1/2 flexCenter shadow-lg w-full sm:w-[80%] lg:w-[60%] h-[15.75rem] sm:h-[26.375rem] lg:h-[28.125rem] xl:h-[32.125rem] 2xl:h-[36.125rem] 3xl:h-[45.125rem]    overflow-hidden '>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={photoIndex}
            src={imagesPaths[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                photoHandler(1);
              } else if (swipe > swipeConfidenceThreshold) {
                photoHandler(-1);
              }
            }}
            className='absolute h-auto w-[95%]  lg:max-w-[85%] rounded-sm cursor-grab outline-[var(--mainColorOpacity30)]'
            whileTap={{ cursor: 'grabbing' }}
          />
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default PhotoSlider;
