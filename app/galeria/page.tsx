'use client';

import React from 'react';
import { PageWrapper } from '@/components/page-wrapper';
import { useIsSectionInView } from '@/lib/hook';

import Title from '@/components/title';
import PhotoSlider from '@/components/photo-slider/photo-slider';

const Gallery = () => {
  const { ref } = useIsSectionInView('Galeria');
  return (
    <PageWrapper>
      <section
        ref={ref}
        className=' mt-[9rem] lg:mt-[12rem]  min-h-[700px] '
        id='galeria'>
        <Title mb='mb-[1.25rem] lg:mb-[2.25rem]'>Galeria zdjęć</Title>

        <PhotoSlider />
      </section>
    </PageWrapper>
  );
};

export default Gallery;
