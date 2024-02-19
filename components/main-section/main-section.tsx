'use client';
import Image from 'next/image';
import React from 'react';
import backgroundImage from '@/public/image/Awaria-samochodu-na-drodze-1536x864.webp';
import mobileBg from '@/public/image/mobile-bg.jpg';
import { motion } from 'framer-motion';
import { useIsSectionInView } from '@/lib/hook';
import { scrolltoHash } from '@/lib/utils';

const MainSection = () => {
  const { ref } = useIsSectionInView('Strona główna', 1);

  return (
    <section
      className=' lg:min-h-[calc(1080px-128px)] relative  h-[100vh]'
      id='glowna'
      ref={ref}>
      <div className='absolute top-0 left-0 h-full w-full'>
        <div className='bg-black/50 absolute top-0 left-0 z-40 h-full w-full' />
        <Image
          src={backgroundImage}
          alt='bacground_Image'
          quality={45}
          sizes='100vh'
          className='object-cover lg:block hidden'
          priority
          fill
        />
        <Image
          src={mobileBg}
          alt='bacground_Image'
          quality={45}
          sizes='100vh'
          className='object-cover lg:hidden '
          priority
          fill
        />
      </div>
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center gap-10 flex flex-col text-[var(--text-main-white)] w-full '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <div className='w-full'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold -tracking-tighter mb-10  underline underline-offset-8 decoration-[var(--mainColor)]'>
            Pomoc drogowa
          </h1>
          <h3 className='font-semibold text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider w-full'>
            Transport pojazdów osobowych oraz maszyn o masie do 14 ton.{' '}
          </h3>
        </div>
        <div className=' lg:w-[300px] w-[250px] left-1/2 relative -translate-x-1/2'>
          <motion.button
            onClick={() => scrolltoHash('onas')}
            className='bg-[var(--mainColor)] py-3  lg:py-5 lg:px-10 rounded-sm font-semibold w-full text-[var(--text-main-dark)] text-sm lg:text-base mt-[50px] shadow-lg'
            whileHover={{
              scale: 1.05,
              boxShadow: '5px 5px 0 var(--mainColorOpacity60)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            Dowiedz się więcej
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default MainSection;
