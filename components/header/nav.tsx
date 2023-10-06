'use client';

import { links } from '@/lib/data';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

type PropsType = {
  scrollPositionY: number;
  isDesktop: boolean;
};
const Nav = ({ scrollPositionY, isDesktop }: PropsType) => {
  const [activePage, setActivePage] = useState('Strona główna');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const scrollClass =
    scrollPositionY <= 0
      ? 'lg:top-[6.5rem] bg-white text-black shadow-lg '
      : 'lg:top-[2rem] bg-white lg:bg-transparent text-black shadow-none';
  const activeMenuHandler = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const activeMenuCss = !isMenuVisible ? '-left-[100%]' : 'left-[0]';

  return (
    <>
      {!isMenuVisible && (
        <motion.div
          className='mt-3 ml-3 text-4xl block lg:hidden z-[999]'
          initial={{ opacity: 0, y: 1000, x: '0%' }}
          animate={{ opacity: 1, y: 0, x: '0%' }}>
          <RxHamburgerMenu onClick={activeMenuHandler} />
        </motion.div>
      )}

      <motion.nav
        className={`fixed flex items-center justify-start w-full h-full top-0 flex-col z-[990] text-sm  desktop  transition-all duration-300 
         ${scrollClass} ${activeMenuCss}`}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: isMenuVisible && isDesktop ? '1%' : 0 }}>
        {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0, y: 1000, x: '0%' }}
            animate={{ opacity: 1, y: 0, x: '0%' }}
            className=' block lg:hidden z-[999] left-[0%] absolute mt-3 ml-3'>
            <GrClose className='text-4xl' onClick={activeMenuHandler} />
          </motion.div>
        )}

        <ul className='flexCenter flex-col text-xl xl:p-4 lg:p-4 mt-[6.25rem] md:text-sm lg:gap-4 lg:flex-row lg:mt-0 xl:gap-5 xl:text-base'>
          {links.map((link, index) => (
            <li key={index} className='my-3 tracking-wide'>
              <Link
                href={link.link}
                className={` capitalize hover:text-blue-400 transition relative ${
                  link.name === activePage ? 'text-blue-400 font-semibold ' : ''
                }`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Nav;
