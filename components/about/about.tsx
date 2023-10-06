'use client';
import { useIsSectionInView } from '@/lib/hook';
import React from 'react';

const About = () => {
  const { ref } = useIsSectionInView('O nas');

  return (
    <section ref={ref} id='onas' className=' scroll-mt-24'>
      about
    </section>
  );
};

export default About;
