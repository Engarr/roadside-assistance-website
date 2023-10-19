'use client';

import React, { useState } from 'react';
import { CookieSVG } from '@/lib/cookieSvg';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './title';

const Cookie = () => {
  const isCookieAccepted =
    (typeof localStorage !== 'undefined' && localStorage.getItem('cookie')) ||
    false;
  const [isAccepted, setIsAccepted] = useState(isCookieAccepted);

  const acceptCookieHandler = () => {
    setIsAccepted(true);
    localStorage.setItem('cookie', 'true');
  };
  return (
    <>
      <AnimatePresence mode='wait'>
        {!isAccepted && (
          <motion.div
            className='fixed bottom-0 lg:right-0 lg:bottom-1 lg:w-auto lg:max-w-[350px] h-auto z-[999] bg-[var(--white)] shadow-md shadow-white/25 rounded-sm p-2 m-0 lg:p-5  lg:m-2 '
            key='cookie-banner'
            initial={{ opacity: 0, y: 100, display: 'none' }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5 },
              display: 'block',
            }}
            exit={{ opacity: 0, y: 100, display: 'none' }}>
            <div className=' p-0 mb-0 lg:p-1 lg:mb-2'>
              <CookieSVG
                width='w-[50px] lg:w-[80px]'
                height='h-[50px] lg:h-[80px]'
              />
            </div>
            <div className=''>
              <Title
                textSize='text-base lg:text-lg'
                mb=' mb-[0.25rem] lg:mb-[1.25rem]'>
                Twoja prywatność
              </Title>
              <p className='tracking-tight text-xs lg:text-base'>
                Ta strona wykorzystuje pliki cookies. Informacje te
                wykorzystywane są tylko do celów statystycznych w celu
                usprawnienia działania serwisu. Dowiedz się więcej
                <Link href='/polityka' className='text-[var(--darkBlue)]'>
                  {' '}
                  Dowiedz się więcej
                </Link>
              </p>
              <div className='w-full text-center my-1 lg:my-3 '>
                <button
                  onClick={acceptCookieHandler}
                  className=' px-2 py-2 lg:px-5 lg:py-3 bg-[var(--mainColor)] rounded-lg text-[var(--white)]'>
                  Akceptuje
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cookie;
