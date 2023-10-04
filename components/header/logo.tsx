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
      ? 'xl:text-3xl mt-4 tracking-normal xl:tracking-wider'
      : 'mt-0 tracking-normal';
  const scrollClassDivData =
    scrollPositionY <= 0
      ? 'opacity-1 lg:h-[50px] xl:h-[60px]'
      : 'opacity-0 h-[0px]';
  return (
    <motion.div
      className={` flexCenter flex-col fixed right-0 top-0 ${scrollClassDiv} lg:left-1/2  lg:w-[220px] lg:rounded-sm lg:p-3 xl:w-[24.125rem] transition-all duration-300`}
      initial={{ opacity: 0, y: -100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: isDesktop ? '-50%' : '0%' }}>
      <Link href='/'>
        <h1
          className={`text-orange-500 font-bold mt-3 mr-3  uppercase  text-xl ${roboto_mono.className}  ${scrollClassH1} transition-all lg:mt-0 lg:mr-0 lg:text-2xl xl:text-4xl`}>
          Pomoc drogowa
        </h1>
      </Link>
      <div
        className={` hidden  flex-col text-center mt-1 ${scrollClassDivData} transition-all lg:flex`}>
        <p className='font-semibold tracking-widest xl:text-2xl'>TRANSWOŚ</p>
        <p className='text-sm mb-2 xl:text-base'>Stanisław Woś</p>
      </div>
      <div
        className='flex items-center justify-center lg:hidden text-lg'
        onClick={handleCall}>
        <p className='flexCenter mt-1'>
          <CgPhone className='text-green-700 ' />

          <span className='font-semibold pl-1'>608 450 246</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Logo;
