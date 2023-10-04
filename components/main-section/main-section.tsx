'use client';
import Image from 'next/image';
import React from 'react';
import backgroundImage from '@/public/image/AdobeStock_227994316.jpeg';
import { motion } from 'framer-motion';
import { CgPhone } from 'react-icons/cg';
import { handleCall } from '@/lib/utils';
import { BiSolidRightArrow } from 'react-icons/bi';
import { roboto_mono } from '@/lib/fonts';

const MainSection = () => {
  const rotateVariants = {
    left: {
      rotate: -2,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
    right: {
      rotate: 2,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  };

  return (
    <section className='h-screen relative' id='glowna'>
      <div className='absolute top-0 ring-0 w-full h-full bg-black/60 z-[50]' />
      <div
        className=' absolute p-2 lg:p-0 top-[30%] lg:top-[40%] left-1/2 -translate-x-[50%] z-[100] w-full lg:w-[65%] 
        text-white tracking-wider  
      '>
        <motion.h2
          className={`${roboto_mono.className} text-xl lg:text-5xl my-2 font-bold`}
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{ opacity: 1, x: 0 }}>
          POMOC DROGOWA - ORŁY
        </motion.h2>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className=' text-sm sm:text-base lg:text-xl my-2 '>
          <p>
            Specjalizująca się w świadczeniu usług pomocy drogowej dla{' '}
            <span className='font-bold'> pojazdów osobowych</span> oraz{' '}
            <span className='font-bold'>maszyn</span> o masie do{' '}
            <span className='font-bold'> 14 ton</span>.
          </p>
          <p className='mt-1  lg:mt-2'>
            Oferujemy profesjonalną i kompleksową pomoc na terenie{' '}
            <span className='font-bold'>całego kraju</span>
          </p>
        </motion.div>
      </div>

      <Image
        src={backgroundImage}
        fill
        alt='bgc'
        quality={80}
        objectFit='cover'
      />
      <motion.div
        className='flexCenter absolute bottom-0 lg:bottom-[2%] bg-orange-500/75 w-full xl:w-[50%] text-white font-bold z-[100] py-5 px-2 lg:py-10 text-sm xl:text-2xl rounded-md'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <p className='flex flex-col lg:flex-row items-center justify-center text-center tracking-wide text-base lg:text-2xl'>
          Potrzebujesz pomocy?
          <motion.span
            className=' mt-1 lg:mt-0 bg-green-500 py-2 lg:ml-4 rounded-3xl text-center flex justify-center items-center w-full lg:w-[180px] lg:text-xl border border-white/20 sm:cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}>
            <CgPhone className=' font-extrabold  pr-1 text-2xl lg:text-3xl' />
            Zadzwoń
          </motion.span>
        </p>
      </motion.div>
    </section>
  );
};

export default MainSection;
