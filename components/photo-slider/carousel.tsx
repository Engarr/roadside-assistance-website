'use client';

import { imagesPaths } from '@/lib/data';
import React from 'react';

import PhotoSlide from './photo-slider';
import { StaticImageData } from 'next/image';

type CarouselType = {
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setFullscreenImageArr: React.Dispatch<
    React.SetStateAction<StaticImageData[] | null>
  >;
};

const Carousel = ({
  setActiveImageIndex,
  setFullscreenImageArr,
}: CarouselType) => {
  return (
    <>
      <PhotoSlide
        imagesPaths={imagesPaths}
        setFullscreenImageArr={setFullscreenImageArr}
        setImgIndex={setActiveImageIndex}
      />
    </>
  );
};

export default Carousel;
