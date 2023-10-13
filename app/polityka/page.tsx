'use client';

import { PageWrapper } from '@/components/page-wrapper';
import React from 'react';
import Title from '@/components/title';
import { polityc } from '@/lib/data';
import { roboto_mono } from '@/lib/fonts';
import { motion } from 'framer-motion';

const Page = () => {
  const animationTitleVaraiants = {
    start: { opacity: 0, x: -100 },
    end: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2 },
    }),
  };
  const animationDescVariants = {
    start: { opacity: 0 },
    end: (index: number) => ({
      opacity: 1,

      transition: { delay: index * 0.25 },
    }),
  };
  return (
    <PageWrapper>
      <section className='mt-[200px] min-h-[100vh] mb-20'>
        <Title>Polityka prywatności:</Title>
        <div>
          <ul className='px-3 lg:px-0 lg:w-[70%] relative lg:left-1/2 lg:-translate-x-1/2'>
            {polityc.map((item, index) => (
              <React.Fragment key={index}>
                <motion.h3
                  className={`my-2 lg:my-4 font-semibold text-[var(--mainColor)] text-2xl lg:tracking-wider ${roboto_mono.className}  `}
                  variants={animationTitleVaraiants}
                  initial='start'
                  whileInView='end'
                  custom={index}
                  viewport={{
                    once: true,
                  }}>
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={animationDescVariants}
                  initial='start'
                  whileInView='end'
                  custom={index}
                  viewport={{
                    once: true,
                  }}>
                  {item.description}
                </motion.p>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Page;
