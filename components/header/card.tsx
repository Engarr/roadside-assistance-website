import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { motion } from 'framer-motion';

import { handleCall } from '@/lib/utils';

type PropsType = {
  scrollPositionY: number;
};

const Card = ({ scrollPositionY }: PropsType) => {
  const scrollClassDiv =
    scrollPositionY <= 0
      ? 'top-0  bg-orange-400 shadow-lg text-white lg:w-[14.75rem] lg:h-[10.75rem] xl:w-[18.75rem] xl:h-[12.75rem]'
      : 'top-[1rem] bg-transparent text-black';
  const scrollClassAddress =
    scrollPositionY <= 0 ? 'flexCenter flex-col' : 'hidden';
  return (
    <motion.div
      className={`hidden fixed items-center justify-center flex-col rounded-sm right-[1%]  ${scrollClassDiv} transition-all duration-300 overflow-hidden lg:flex`}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}>
      <p
        className='flex items-center py-2 w-full justify-center cursor-pointer lg:text-xl xl:text-2xl'
        onClick={handleCall}>
        <span className=''>
          <CgPhone className='text-green-500 font-extrabold text-3xl' />
        </span>
        <span className='pl-2'>608 450 246</span>
      </p>
      <div className={`${scrollClassAddress}`}>
        <p className=''>ul. Lipowa 88</p>
        <p>37-716 Orły</p>
      </div>
    </motion.div>
  );
};

export default Card;
