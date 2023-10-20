'use client';

import React from 'react';
import Title from '@/components/title';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className=' mt-12 lg:mt-28 h-[100vh] flexCenter flex-col'>
      <Title textSize='text-xl lg:text-3xl' mb='mb-[2.25rem]'>
        Błąd 404 | Nie ma takiej strony.
      </Title>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        className=' text-lg lg:text-2xl flex'>
        <p>
          Wróć do{' '}
          <Link
            href='/'
            className='font-bold text-[var(--darkBlue)] hover:text-[var(--blue)] transition-all'>
            strony głównej
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
