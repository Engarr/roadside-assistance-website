import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import ControlPanel from './control-panel';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type FullscreenImageProps = {
  onClose: () => void;
  setFullscreenImageArr: React.Dispatch<
    React.SetStateAction<StaticImageData[] | null>
  >;

  imgIndex: number;
  imagesPaths: StaticImageData[] | null;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FullscreenImage = ({
  onClose,
  imgIndex,
  setImgIndex,
  imagesPaths,
  setFullscreenImageArr,
}: FullscreenImageProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && imagesPaths) {
      setImgIndex((prevIndex) =>
        prevIndex === 0 ? imagesPaths.length - 1 : prevIndex - 1
      );
    } else if (e.key === 'ArrowRight' && imagesPaths) {
      setImgIndex((prevIndex) =>
        prevIndex === imagesPaths.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === 'Escape') {
      document.body.style.overflowY = 'auto';
      setFullscreenImageArr(null);
    }
  };

  const onNextImg = () => {
    if (imagesPaths) {
      setImgIndex((prevIndex) =>
        prevIndex === imagesPaths.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const onPrevImg = () => {
    if (imagesPaths) {
      setImgIndex((prevIndex) =>
        prevIndex === 0 ? imagesPaths.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setImgIndex, imagesPaths]);

  return (
    <>
      {imagesPaths && (
        <div className='sticky top-0 left-0 bottom-0 right-0 w-screen h-screen bg-[var(--black-95)] flex justify-center items-center z-[100] '>
          <motion.button
            onClick={onClose}
            className='absolute top-[2%] right-[5%] text-white text-2xl z-[110] bg-[var(--black-80)] rounded-full p-1 xl:p-2'
            whileHover={{ scale: 1.1, color: 'var(--mainColor)' }}
            whileTap={{ scale: 0.95, rotate: 90 }}>
            <IoClose onClick={onClose} />
          </motion.button>
          <ControlPanel
            onClose={onClose}
            onNext={onNextImg}
            onPrev={onPrevImg}
          />
          <div className='relative h-full w-full'>
            <Image
              src={imagesPaths[imgIndex].src}
              alt='zdjęcie galerii'
              quality={100}
              fill
              className='object-contain z-50 relative '
              priority
              placeholder='blur'
              blurDataURL={imagesPaths[imgIndex].src}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FullscreenImage;
