'use client';

import React from 'react';
import { useIsSectionInView } from '@/lib/hook';
import { offers } from '@/lib/data';
import Title from '../title';
import CardOffer from './card-offer';
import { GearSvg } from '@/lib/gearSvg';

const Offer = () => {
  const { ref } = useIsSectionInView('Oferta', 0.5);
  return (
    <section
      ref={ref}
      id='oferta'
      className='scroll-mt-36 mt-28 mb-28 relative h-[1000px] text-center  '>
      <Title>Co możemy zaoferować?</Title>
      <div className=' flex flex-col w-full lg:w-[60%] lg:left-1/2 relative lg:-translate-x-1/2 mt-3'>
        <div className=' hidden lg:block lg:absolute w-[50%] h-[50%] xl:h-[90%] left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 '>
          <GearSvg />
        </div>
        {offers.map((item, index) => (
          <React.Fragment key={index}>
            <CardOffer {...item} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Offer;
