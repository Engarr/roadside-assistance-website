'use client';

import { useIsSectionInView } from '@/lib/hook';
import React from 'react';
import Title from '../title';

const Contact = () => {
  const { ref } = useIsSectionInView('Kontakt');

  return (
    <section ref={ref} id='kontakt' className='scroll-mt-34 min-h-[700px]'>
      <Title>Gdzie nas znaleźć?</Title>
    </section>
  );
};

export default Contact;
