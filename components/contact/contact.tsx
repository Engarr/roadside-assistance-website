'use client';

import { useIsSectionInView } from '@/lib/hook';
import React, { Suspense } from 'react';
import Title from '../title';
import { motion } from 'framer-motion';
import { GoLocation } from 'react-icons/go';
import { dropDownVariants } from '../title';

const Map = React.lazy(() => import('./map'));

const Contact = () => {
  const { ref, inView } = useIsSectionInView('Kontakt');
  return (
    <section
      ref={ref}
      id='kontakt'
      className='scroll-mt-36 mt-28 mb-28 min-h-[43.75rem]'>
      <Title>Gdzie nas znaleźć?</Title>
      <div className=' flex text-center justify-around lg:flex-row flex-col-reverse p-1'>
        <motion.div
          className='relative w-[100%] h-[18.75rem]  lg:h-[25rem] lg:w-[50%]  border-[var(--mainColorOpacity60)] border-2 rounded-sm '
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{
            once: true,
          }}>
          {inView && (
            <Suspense fallback={<div>Pobierania mapy...</div>}>
              <Map />
            </Suspense>
          )}
        </motion.div>
        <motion.div className='mt-0 lg:mt-5  '>
          <Title textSize='text-2xl' mb=' mb-[2.25rem]'>
            Siedziba firmy
          </Title>
          <motion.h3
            className='mb-2'
            variants={dropDownVariants}
            initial='initial'
            whileInView='animate'>
            <span className='tracking-wider font-semibold text-xl'>
              TRANSWOS
            </span>{' '}
            - Stanisław Woś
          </motion.h3>
          <div className='flexCenter flex-col lg:flex-row lg:text-2xl mb-[3.125rem] lg:mb-0'>
            <motion.div
              className=' lg:mr-4 mb-2 lg:mb-0'
              initial={{ opacity: 0, rotateY: '-360deg' }}
              whileInView={{ opacity: 1, rotateY: '0deg' }}
              transition={{ repeat: 2, duration: 0.5 }}>
              <GoLocation className=' text-5xl text-[var(--mainColor)]' />
            </motion.div>
            <motion.div
              className='flex flex-col'
              variants={dropDownVariants}
              initial='initial'
              whileInView='animate'>
              <p className='mb-2 font-semibold tracking-wider text-xl '>
                Lipowa 88
              </p>
              <p>37-716 Orły</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
