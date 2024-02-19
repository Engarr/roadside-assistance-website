'use client';

import React from 'react';
import { useIsSectionInView } from '@/lib/hook';
import { offers } from '@/lib/data';
import Title from '../title';
import CardOffer from './card-offer';
import Wrapper from '../wrapper';
import bgImg from '@/public/image/vecteezy_summer-road-in-the-trees-dividing-line_2506375.jpg';
import Image from 'next/image';

const Offer = () => {
  const { ref } = useIsSectionInView('Oferta', 0.5);
  return (
    <section
      ref={ref}
      id='oferta'
      className='scroll-mt-[5rem] lg:scroll-mt-24  relative text-center  '>
      <div className='absolute  w-full h-full top-0 left-0'>
        <div className='bg-black/10 absolute top-0 left-0 z-40 h-full w-full blur-md ' />
        <Image
          src={bgImg}
          alt=''
          fill
          className='object-cover'
          sizes='100vh'
          quality={50}
          loading='lazy'
        />
        <a
          href='https://www.vecteezy.com/free-photos/road'
          className='hidden'
          rel='nofollow'>
          Road Stock photos by Vecteezy
        </a>
      </div>
      <Wrapper style='py-16'>
        <Title style=''>Nasza oferta</Title>

        <div className=' flex flex-col w-full lg:w-[60%] lg:left-1/2 relative lg:-translate-x-1/2 mt-3'>
          {offers.map((item, index) => (
            <React.Fragment key={index}>
              <CardOffer {...item} index={index} />
            </React.Fragment>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offer;
