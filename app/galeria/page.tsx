'use client';

import React from 'react';
import { PageWrapper } from '@/components/page-wrapper';
import { motion } from 'framer-motion';
import { useIsSectionInView } from '@/lib/hook';

import Title from '@/components/title';
import PhotoSlider from '@/components/photo-slider/photo-slider';

const Gallery = () => {
  const { ref } = useIsSectionInView('Galeria');
  return (
    <PageWrapper>
      <section ref={ref} className='mt-36 h-[100vh]' id='galeria'>
        <Title>Galeria zdjęć</Title>

        <PhotoSlider />
      </section>
    </PageWrapper>
  );
};

export default Gallery;
