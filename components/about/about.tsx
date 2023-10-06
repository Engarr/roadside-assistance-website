'use client';
import { useIsSectionInView } from '@/lib/hook';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Description from './description';

const About = () => {
  const { ref } = useIsSectionInView('O nas');

  const dropDown = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={ref} id='onas' className='scroll-mt-24 lg:scroll-mt-28 mb-28'>
      <div className='relative w-full lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2 mt-28 lg:text-xl p-5 flex items-center text-center justify-center flex-col '>
        <motion.h2
          className='capitalize text-2xl lg:text-3xl mb-5 tracking-wider text-orange-500 font-bold '
          variants={dropDown}
          whileInView='animate'
          initial='initial'
          viewport={{
            once: true,
          }}>
          O nas
        </motion.h2>
        <Description index={1}>
          <span className='font-semibold'>Firma Transwoś </span> to firma
          specjalizująca się w świadczeniu usług pomocy drogowej dla{' '}
          <span className='font-semibold'>pojazdów osobowych</span> oraz dla{' '}
          <span className='font-semibold'>maszyn </span> o masie do{' '}
          <span className='font-semibold'>14 ton.</span>
        </Description>

        <Description index={2}>
          Oferujemy <span className='font-semibold'>profesjonalną</span> oraz{' '}
          <span className='font-semibold'>kompleksową</span> pomoc na terenie
          całego kraju.
        </Description>

        <Description index={3}>
          <span className='font-semibold'>Posiadamy sprzęt </span>, który
          pozwala na przetransportowanie różnego rodzaju maszyn i urządzeń.
        </Description>
        <Description index={4}>
          W przypadku awarii czy kolizji,{' '}
          <span className='font-semibold'>
            zapewniamy szybką i skuteczną pomoc{' '}
          </span>
          dostarczając pojazd na wskazane miejsce bądź naprawy pojazdy na
          miejscu o ile jest to możliwe.
        </Description>
      </div>
    </section>
  );
};

export default About;
