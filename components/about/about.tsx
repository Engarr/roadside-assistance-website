'use client';
import { useIsSectionInView } from '@/lib/hook';
import React from 'react';
import Description from './description';
import Title from '../title';
import Wrapper from '../wrapper';
import Image from 'next/image';
import sign from '@/public/image/vecteezy_ai-generated-road-traffic-cone-border_36181135.png';

import { motion } from 'framer-motion';

const About = () => {
  const { ref } = useIsSectionInView('O nas');

  return (
    <section
      ref={ref}
      id='onas'
      className='scroll-mt-[5rem] lg:scroll-mt-24 relative w-full mt-0 lg:text-xl p-5 flex-col'>
      <Wrapper style='py-16'>
        <motion.div
          className='absolute w-[100px] lg:w-[200px] lg:h-[200px] bottom-0 lg:right-[10%] right-[-5%] '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <Image src={sign} alt='' />
          <a
            href='https://www.vecteezy.com/free-png/road'
            rel='nofollow'
            className='hidden'>
            Road PNGs by Vecteezy
          </a>
        </motion.div>
        <Title>Kim jesteśmy?</Title>
        <div className='lg:w-1/2 flex flex-col  items-center overflow-hidden lg:left-1/2 lg:-translate-x-1/2 relative text-center'>
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
            <span className='font-semibold'>Posiadamy sprzęt</span>, który
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
      </Wrapper>
    </section>
  );
};

export default About;
