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
      <section
        ref={ref}
        className=' mt-[9rem] lg:mt-[12rem] h-[100vh] min-h-[500px] '
        id='galeria'>
        <Title mb='mb-[1.25rem] lg:mb-[4.25rem]'>Galeria zdjęć</Title>

        <PhotoSlider />
      </section>
    </PageWrapper>
  );
};

export default Gallery;
