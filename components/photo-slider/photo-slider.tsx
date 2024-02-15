'use client';

import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';

type PhotoSliderType = {
  imagesPaths: StaticImageData[];

  setFullscreenImageArr: React.Dispatch<
    React.SetStateAction<StaticImageData[] | null>
  >;

  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};
const DRAG_BUFFER = 30;
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 300,
  damping: 50,
};

const PhotoSlider = ({
  imagesPaths,

  setImgIndex,
  setFullscreenImageArr,
}: PhotoSliderType) => {
  const [dragging, setDragging] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIdx < imagesPaths.length - 1) {
      setImageIdx((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imageIdx > 0) {
      setImageIdx((prev) => prev - 1);
    }
  };
  const OnClickSetFullScreenImagesArr = (
    imagesArr: StaticImageData[],
    activeImageIndex: number
  ) => {
    setFullscreenImageArr(imagesArr);
    setImgIndex(activeImageIndex);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <div className=' relative  overflow-hidden xl:py-5 w-full xl:w-3/4  bg-[var(--background-white-2)] p-2  mb-5 mt-0'>
        <motion.div
          className='flex items-center cursor-grab active:cursor-grabbing h-[300px] lg:h-[500px] '
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${imageIdx * 100}%` }}
          transition={SPRING_OPTIONS}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}>
          <Images
            imagesPaths={imagesPaths}
            imageIdx={imageIdx}
            OnClickSetFullScreenImagesArr={OnClickSetFullScreenImagesArr}
          />
        </motion.div>
        <Dots
          imageIdx={imageIdx}
          setImageIdx={setImageIdx}
          imagesPaths={imagesPaths}
        />
      </div>
    </>
  );
};

export default PhotoSlider;

type ImagesPathsType = {
  imagesPaths: StaticImageData[];
  imageIdx: number;
  OnClickSetFullScreenImagesArr: (
    imagesArr: StaticImageData[],
    activeImageIndex: number
  ) => void;
};

const Images = ({
  imagesPaths,
  imageIdx,
  OnClickSetFullScreenImagesArr,
}: ImagesPathsType) => {
  return (
    <>
      {imagesPaths.map((image, idx) => {
        return (
          <motion.div
            key={idx}
            className='aspect-auto relative shrink-0 w-[100%] h-[100%] group'
            animate={{ scale: imageIdx === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}>
            <div
              className='absolute left-[90%] md:left-[80%] top-[2%] text-3xl  lg:opacity-0 group-hover:opacity-100 transition-all z-[100] p-1 cursor-pointer text-[var(--mainColor)] hover:scale-[1.2] bg-white/80 rounded-full shadow-xl '
              onClick={() => OnClickSetFullScreenImagesArr(imagesPaths, idx)}>
              <HiMagnifyingGlassPlus />
            </div>
            <div className='z-[50] h-[100%] w-[100%] absolute  bg-black opacity-0'></div>

            <Image
              src={image.src}
              alt='zdjęcie galerii'
              quality={100}
              fill
              sizes='100vh'
              className='object-contain z-0  '
              loading='lazy'
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  imageIdx,
  setImageIdx,
  imagesPaths,
}: {
  imageIdx: number;
  setImageIdx: React.Dispatch<React.SetStateAction<number>>;
  imagesPaths: StaticImageData[];
}) => {
  return (
    <div className='flex mt-0 w-full justify-center gap-2  overflow-hidden wrap'>
      {imagesPaths.map((i, index) => {
        return (
          <button
            key={index}
            onClick={() => setImageIdx(index)}
            className={cn(
              'max-h-[50px] xl:max-h-[100px]  max-w-[200px] xl:max-w-[100px] overflow-hidden  border-2  relative',
              {
                'border-[var(--mainColor)] ': imageIdx === index,
              }
            )}>
            <Image
              src={i}
              alt='zdjecie'
              width={100}
              height={100}
              quality={10}
              className='0bject-left-top'
            />
          </button>
        );
      })}
    </div>
  );
};
