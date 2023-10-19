import React, { useEffect, useRef } from 'react';
import { imagesPaths } from '@/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import SwitchButton from './switch-button';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

type PhotoBarType = {
  imageIndex: number;
  setPhotoIndex: React.Dispatch<React.SetStateAction<[number, number]>>;
  nextHandler: (direction: string) => void;
  imageRef: React.LegacyRef<HTMLDivElement> | null;
  photoBarRef: React.LegacyRef<HTMLDivElement> | null;
};

const PhotoBar = ({
  imageIndex,
  setPhotoIndex,
  nextHandler,
  imageRef,
  photoBarRef,
}: PhotoBarType) => {
  return (
    <div className=' w-1/2 left-1/2 -translate-x-1/2 relative sm:w-[50%] lg:w-[40%] hidden sm:block my-[50px]'>
      <SwitchButton
        arrowDirection={-5}
        condition={imageIndex !== 0}
        actionHandler={() => {
          nextHandler('left');
          setPhotoIndex((prev) => [prev[0] - 1, -1]);
        }}
        styleClass='-left-[50px] top-[40px] absolute '>
        <AiOutlineArrowLeft />
      </SwitchButton>

      <SwitchButton
        arrowDirection={5}
        condition={imageIndex !== imagesPaths.length - 1}
        actionHandler={() => {
          nextHandler('right');
          setPhotoIndex((prev) => [prev[0] + 1, 1]);
        }}
        styleClass='-right-[50px] top-[40px] absolute'>
        <AiOutlineArrowRight />
      </SwitchButton>

      <div
        ref={photoBarRef}
        className={`relative w-full flex my-5 justify-start  photoBar  `}>
        {imagesPaths.map((img, index) => (
          <div
            ref={imageRef}
            key={index}
            className={clsx(
              `relative min-w-[calc(100%)]  sm:min-w-[calc(100%/2)]  lg:min-w-[calc(100%/3-0.24rem)] min-h-[120px] cursor-pointer rounded-md mr-1 last:mr-0`,
              {
                'border-[var(--mainColor)] border-2': index === imageIndex,
              }
            )}>
            <Image
              src={img}
              alt='Firmowe_zdjęcie'
              quality={75}
              className='absolute object-cover rounded-md shadow-lg w-full h-full '
              sizes='(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 80vw'
              fill
              loading='lazy'
              onClick={() => {
                setPhotoIndex([index, index > imageIndex ? 1 : -1]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBar;
