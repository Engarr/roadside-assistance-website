'use client';

import React from 'react';
import { PageWrapper } from '@/components/page-wrapper';
import { motion } from 'framer-motion';
import { useIsSectionInView } from '@/lib/hook';

const Gallery = () => {
  const { ref } = useIsSectionInView('Galeria');
  return (
    <PageWrapper>
      <section ref={ref} className='mt-28 h-[100vh] flexCenter' id='galeria'>
        <h2 className='font-semibold text-center text-3xl text-[var(--mainColor)] capitalize flexCenter flex-col'>
          Jeszcze nic tu nie ma...{' '}
          <motion.span
            className='text-5xl'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}>
            🚚
          </motion.span>
        </h2>
      </section>
    </PageWrapper>
  );
};

export default Gallery;
