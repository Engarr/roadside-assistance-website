import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CgPhone } from 'react-icons/cg';
import { cn, handleCall } from '@/lib/utils';

type PropsType = {
  scrollPositionY: number;
  hideMobileNavPhoneCall: () => void;
};

const BusinessCard = ({
  scrollPositionY = 0,
  hideMobileNavPhoneCall,
}: PropsType) => {
  return (
    <motion.div
      className={cn(
        ` flexCenter flex-col absolute right-0 lg:right-10 top-0 mt-[8px]  $ lg:w-[20.125rem] lg:rounded-sm lg:p-3 xl:w-[28.125rem] transition-all duration-300 z-[999] pr-2 lg:pr-0 lg:shadow-none lg:mt-0`,
        { 'lg:shadow-lg lg:bg-white lg:mt-[1.125rem]': scrollPositionY <= 0 }
      )}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}>
      <Link
        href='/'
        className='hover:scale-105 active:scale-95 transition-all outline-[var(--mainColorOpacity30)] px-2'>
        <h3
          className={cn(
            `text-[var(--mainColor)] font-bold  uppercase text-xl  transition-all lg:text-2xl xl:text-4xl tracking-normal lg:mt-0'`,
            {
              'xl:text-3xl mt-0 lg:mt-2 tracking-normal xl:tracking-wider':
                scrollPositionY <= 0,
            }
          )}>
          Pomoc drogowa
        </h3>
      </Link>
      <div
        className={cn(
          `hidden lg:flex flex-col text-center mt-1 opacity-0 lg:h-[5px] transition-all `,
          { 'opacity-1 lg:h-[60px]': scrollPositionY <= 0 }
        )}>
        <p className='font-semibold tracking-widest xl:text-2xl'>TRANSWOŚ</p>
        <p className='text-sm mb-2 xl:text-base'>Stanisław Woś</p>
      </div>
      <div
        className='flex items-center justify-center text-lg z-[999]'
        onClick={handleCall}>
        <motion.p
          className={cn(
            'flexCenter hover:scale-105 active:scale-95 transition-all cursor-pointer outline-[var(--mainColorOpacity30)] ',
            { 'lg:text-2xl': scrollPositionY <= 0 }
          )}
          onClick={hideMobileNavPhoneCall}>
          <CgPhone className='text-green-700 ' />

          <span className={`font-semibold pl-1`}>608 450 246</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BusinessCard;
