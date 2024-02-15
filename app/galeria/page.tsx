'use client';

import React, { useState } from 'react';
import { PageWrapper } from '@/components/page-wrapper';
import { useIsSectionInView } from '@/lib/hook';

import Title from '@/components/title';
import Carousel from '@/components/photo-slider/carousel';
import { StaticImageData } from 'next/image';
import FullscreenImage from '@/components/full-screen.tsx/full-screen';

const Gallery = () => {
  const { ref } = useIsSectionInView('Galeria');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenImageArr, setFullscreenImageArr] = useState<
    StaticImageData[] | null
  >(null);
  const onClose = () => {
    setFullscreenImageArr(null);
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      <PageWrapper>
        <section
          ref={ref}
          className=' mt-[6rem] lg:mt-[10rem] flexCenter flex-col'
          id='galeria'>
          <Title mb='mb-0 lg:mb-[2.25rem]'>Galeria zdjęć</Title>
          <Carousel
            setActiveImageIndex={setActiveImageIndex}
            setFullscreenImageArr={setFullscreenImageArr}
          />
        </section>
      </PageWrapper>
      {fullscreenImageArr && (
        <div className='absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/90 flex justify-center items-center z-[100] '>
          <FullscreenImage
            onClose={onClose}
            imgIndex={activeImageIndex}
            imagesPaths={fullscreenImageArr}
            setImgIndex={setActiveImageIndex}
            setFullscreenImageArr={setFullscreenImageArr}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
