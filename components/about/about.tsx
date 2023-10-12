'use client';
import { useIsSectionInView } from '@/lib/hook';
import React from 'react';
import Description from './description';
import Title from '../title';

const About = () => {
  const { ref } = useIsSectionInView('O nas');

  return (
    <section
      ref={ref}
      id='onas'
      className='scroll-mt-24 lg:scroll-mt-28 mb-36 relative w-full lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2 mt-28 lg:text-xl p-5 flex items-center text-center justify-center flex-col min-h-[700px]'>
      <Title>Kim jesteśmy?</Title>
      <div className='w-full flex flex-col  items-center overflow-hidden'>
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
          <span className='font-semibold'>Posiadamy sprzęt</span>, który pozwala
          na przetransportowanie różnego rodzaju maszyn i urządzeń.
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
