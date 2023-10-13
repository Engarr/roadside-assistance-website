'use client';

import React from 'react';
import { useIsSectionInView } from '@/lib/hook';
import { offers } from '@/lib/data';
import Title from '../title';
import CardOffer from './card-offer';

const Offer = () => {
  const { ref } = useIsSectionInView('Oferta', 0.5);

  return (
    <section
      ref={ref}
      id='oferta'
      className='scroll-mt-36 mt-28 mb-28 relative h-[1000px] text-center '>
      <Title>Co możemy zaoferować?</Title>
      <div className=' flex flex-col w-full lg:w-[60%] lg:left-1/2 relative lg:-translate-x-1/2 mt-3'>
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
