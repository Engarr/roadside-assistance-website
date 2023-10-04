import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { motion } from 'framer-motion';
import { handleCall } from '@/lib/utils';
import Image from 'next/legacy/image';
import callPerson from '@/public/image/call-center-1026463_640.png';

type PropsType = {
  scrollPositionY: number;
};

const Card = ({ scrollPositionY }: PropsType) => {
  const scrollClassDiv =
    scrollPositionY <= 0
      ? 'right-[1%] top-[3.5rem] bg-white shadow-lg w-[12.75rem] h-[10.75rem] xl:w-[18.75rem] xl:h-[12.75rem]'
      : ' right-[2%] top-[1rem] bg-transparent shadow-none';
  const scrollClassAddress =
    scrollPositionY <= 0 ? 'flexCenter flex-row' : 'hidden';
  const scrollClassImage =
    scrollPositionY <= 0 ? '-bottom-8 -left-10' : '-bottom-8 -left-20';

  return (
    <motion.div
      className={`hidden fixed items-center justify-center flex-col rounded-sm   ${scrollClassDiv} transition-all duration-300 lg:flex`}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}>
      <p
        className='flex items-center py-2 w-full justify-center cursor-pointer lg:text-xl xl:text-2xl'
        onClick={handleCall}>
        <span>
          <CgPhone className='text-green-500 font-extrabold text-3xl' />
        </span>
        <span className='pl-2'>608 450 246</span>
      </p>
      <div className={`${scrollClassAddress} `}>
        <div className='text-orange-400 text-3xl pr-2'>
          <GoLocation />
        </div>
        <div className='flexCenter flex-col'>
          <p className='mb-1'>Lipowa 88</p>
          <p>37-716 Orły</p>
        </div>
      </div>
      <div
        className={`absolute w-[6.25rem] h-[6.25rem]  rounded-full overflow-hidden ${scrollClassImage}`}>
        <Image src={callPerson} layout='responsive' alt='calling_person-img' />
      </div>
    </motion.div>
  );
};

export default Card;
