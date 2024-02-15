'use client';

import { imagesPaths } from '@/lib/data';
import React, { useState, useRef } from 'react';

import PhotoSlide from './photo-slider';
import { StaticImageData } from 'next/image';
import FullscreenImage from '../full-screen.tsx/full-screen';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1500 : -1500,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1500 : -1500,
    };
  },
};
const swipeConfidenceThreshold = 1500;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
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
