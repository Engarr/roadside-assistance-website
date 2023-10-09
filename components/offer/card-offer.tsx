import { offers } from '@/lib/data';
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type CardOfferProps = (typeof offers)[number] & {
  index: number;
};

const CardOffer = ({ title, arr, icon, index }: CardOfferProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    start: {
      opacity: 0,
      y: 70,
    },
    end: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.25, ease: 'linear' },
    }),
  };

  const slideVariants = {
    visible: { left: 0 },
    hidden: (index: number) => ({
      left: '100%',

      transition: { duration: 0.5, delay: index * 0.25, ease: 'linear' },
    }),
  };
  const controls = useAnimation();
  const SlideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('end');
      SlideControls.start('hidden');
    }
  }, [SlideControls, controls, isInView]);

  return (
    <div className='flex flex-col items-start lg:even:items-end mb-2 mx-4 '>
      <motion.div
        ref={ref}
        variants={animationVariants}
        initial='start'
        animate={controls}
        custom={index}
        className=' relative flex flex-col justify-between shadow-md py-4 min-h-[150px] 
         mb-4  transition-all hover:shadow-2xl w-full lg:w-auto px-2 lg:px-10 overflow-hidden bg-white rounded-md'>
        <h4 className='text-orange-500 font-semibold text-xl lg:text-2xl mb-2 capitalize tracking-wider '>
          {title}:
        </h4>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='items-start flex flex-col text-left w-full '>
            <ul>
              {arr.map((i, index) => (
                <li key={index} className='text-base mb-1'>
                  <span className='text-green-500 pr-1 text-base lg:text-2xl'>
                    ✔
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className='bg-gray-400/10 w-[70px] h-[70px] flexCenter rounded-full shadow-sm text-2xl lg:text-3xl lg:mx-5 '>
              {icon}
            </div>
          </div>
          <motion.div
            ref={ref}
            className=' absolute top-0 bottom-0 left-0  right-0 bg-orange-400 z-[999] w-full h-full'
            variants={slideVariants}
            initial='visible'
            animate={SlideControls}
            custom={index}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CardOffer;
