'use client';

import { useIsSectionInView } from '@/lib/hook';
import React, { Suspense } from 'react';
import Title from '../title';
import { motion } from 'framer-motion';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdPhonePortrait } from 'react-icons/io';

import Loader from '../loader';
import Image from 'next/image';
import localization from '@/public/image/vecteezy_icone-de-localisation-rouge-brillant-avec-rendu-3d-de_12617055.png';

const Map = React.lazy(() => import('./map'));

const Contact = () => {
  const { ref } = useIsSectionInView('Kontakt', 0.5);
  const data = [
    {
      icon: IoMdPhonePortrait,
      title: 'Numer telefonu',
      value: ['+48 608 450 246'],
    },
    {
      icon: FaLocationDot,
      title: 'Lokalizacja',
      value: ['ul. Lipowa 88', '37-716 Orły'],
    },
  ];

  return (
    <section
      ref={ref}
      id='kontakt'
      className='scroll-mt-[5rem] lg:scroll-mt-24 mb-0 bg-white max-w-1/2 shadow-2xl pt-16'>
      <div className=' px-4 xl:px-10 py-10 flex items-center justify-center flex-col relative left-1/2 -translate-x-1/2 mb-10 w-full lg:w-1/2 '>
        <Title mb='mb-[2.25rem] lg:mb-[4.25rem]'>Informacje kontaktowe</Title>

        <div className='flex justify-between items-center lg:items-start flex-col lg:flex-row gap-2 w-full'>
          <div className='absolute w-[100px] lg:w-[200px]  left-0 lg:left-[-30%] bottom-0 lg:bottom-[-20%]'>
            <Image src={localization} alt='' />
            <a
              href='https://www.vecteezy.com/free-png/map'
              rel='nofollow'
              className='hidden'>
              Road PNGs by Vecteezy
            </a>
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className=' flex flex-col items-center justify-center w-full'>
              <div className='flex items-center mb-1 text-lg lg:text-xl '>
                {<item.icon className='text-[var(--mainColor)] mr-1' />}
                <p className='font-semibold'>{item.title}:</p>
              </div>
              <ul className='text-center lg:text-start lg:pl-6 '>
                {item.value.map((val, idx) => (
                  <li key={idx} className='lg:text-lg'>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Title>Tu nas znajdziesz</Title>
      <div className=' flex text-center justify-around lg:flex-row flex-col-reverse p-1'>
        <motion.div
          className='relative  h-[18.75rem]  lg:h-[25rem] w-screen  rounded-sm'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{
            once: true,
          }}>
          <Suspense fallback={<Loader />}>
            <Map />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
