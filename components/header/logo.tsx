import { roboto_mono } from '@/lib/fonts';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { CgPhone } from 'react-icons/cg';
import { handleCall } from '@/lib/utils';

type PropsType = {
  scrollPositionY: number;
  isDesktop: boolean;
};

const Logo = ({ scrollPositionY, isDesktop }: PropsType) => {
  const scrollClassDiv =
    scrollPositionY <= 0
      ? 'lg:shadow-lg lg:bg-white lg:mt-[1.125rem]'
      : 'lg:shadow-none';
  const scrollClassH1 =
    scrollPositionY <= 0
      ? 'xl:text-3xl lg:mt-4 tracking-normal xl:tracking-wider'
      : 'tracking-normal lg:mt-0';
  const scrollClassDivData =
    scrollPositionY <= 0 ? 'opacity-1 lg:h-[60px] ' : 'opacity-0 lg:h-[5px]';
  return (
    <motion.div
      className={` flexCenter flex-col fixed right-0 top-0 mt-0 ${scrollClassDiv} lg:w-[20.125rem] lg:rounded-sm lg:p-3 xl:w-[28.125rem] transition-all duration-300 z-[999]`}
      initial={{ opacity: 0, y: -100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: isDesktop ? '-50%' : '0%' }}>
      <Link href='/' className='hover:scale-105 active:scale-95 transition-all'>
        <h1
          className={`text-orange-500 font-bold mt-3 mr-3  uppercase  text-xl ${roboto_mono.className}  ${scrollClassH1} transition-all lg:mt-0 lg:mr-0 lg:text-2xl xl:text-4xl`}>
          Pomoc drogowa
        </h1>
      </Link>
      <div
        className={`hidden lg:flex flex-col text-center mt-1 ${scrollClassDivData} transition-all `}>
        <p className='font-semibold tracking-widest xl:text-2xl'>TRANSWOŚ</p>
        <p className='text-sm mb-2 xl:text-base'>Stanisław Woś</p>
      </div>
      <div
        className='flex items-center justify-center text-lg z-[900]'
        onClick={handleCall}>
        <p className='flexCenter hover:scale-105 active:scale-95 transition-all cursor-pointer'>
          <CgPhone className='text-green-700 ' />

          <span className={`font-semibold pl-1 ${roboto_mono.className}`}>
            608 450 246
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Logo;