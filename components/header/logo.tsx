import React from 'react';
import { roboto_mono } from '@/lib/fonts';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CgPhone } from 'react-icons/cg';
import { handleCall } from '@/lib/utils';

type PropsType = {
  scrollPositionY: number;
};

const Logo = ({ scrollPositionY = 0 }: PropsType) => {
  const scrollClassDiv =
    scrollPositionY <= 0
      ? 'lg:shadow-lg lg:bg-white lg:mt-[1.125rem]'
      : 'lg:shadow-none lg:mt-0';
  const scrollClassH1 =
    scrollPositionY <= 0
      ? 'xl:text-3xl mt-0 lg:mt-2 tracking-normal xl:tracking-wider'
      : 'tracking-normal lg:mt-0';
  const scrollClassDivData =
    scrollPositionY <= 0 ? 'opacity-1 lg:h-[60px] ' : 'opacity-0 lg:h-[5px]';
  return (
    <motion.div
      className={` flexCenter flex-col fixed right-0 lg:right-10 top-0 mt-[1.125rem]  ${scrollClassDiv} lg:w-[20.125rem] lg:rounded-sm lg:p-3 xl:w-[28.125rem] transition-all duration-300 z-[999] pr-2 lg:pr-0`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}>
      <Link
        href='/'
        className='hover:scale-105 active:scale-95 transition-all outline-[var(--mainColorOpacity30)] px-2'>
        <h1
          className={`text-[var(--mainColor)] font-bold  uppercase text-xl ${roboto_mono.className}  ${scrollClassH1} transition-all lg:text-2xl xl:text-4xl`}>
          Pomoc drogowa
        </h1>
      </Link>
      <div
        className={`hidden lg:flex flex-col text-center mt-1 ${scrollClassDivData} transition-all `}>
        <p className='font-semibold tracking-widest xl:text-2xl'>TRANSWOŚ</p>
        <p className='text-sm mb-2 xl:text-base'>Stanisław Woś</p>
      </div>
      <div
        className='flex items-center justify-center text-lg z-[999]'
        onClick={handleCall}>
        <motion.p className='flexCenter hover:scale-105 active:scale-95 transition-all cursor-pointer outline-[var(--mainColorOpacity30)]'>
          <CgPhone className='text-green-700 ' />

          <span className={`font-semibold pl-1 ${roboto_mono.className}`}>
            608 450 246
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Logo;
