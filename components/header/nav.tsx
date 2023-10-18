'use client';

import { links } from '@/lib/data';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/context/activeSection-context';
import clsx from 'clsx';
import MenuToggleButton from '../menu-toggle-button';

type NavPropsType = {
  scrollPositionY: number;
};

const Nav = ({ scrollPositionY = 0 }: NavPropsType) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const scrollClassLinks =
    scrollPositionY <= 0 ? 'lg:top-[3rem]' : 'lg:top-[2rem]';

  const activeMenuHandler = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const activeMenuCss = !isMenuVisible ? '-left-[100%]' : 'left-[0]';
  const navVariantsAnimate = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <MenuToggleButton
        toggle={activeMenuHandler}
        isMenuVisible={isMenuVisible}
      />

      <motion.nav
        className={`fixed flex items-center justify-start w-full h-full top-0 flex-col z-[990] text-sm desktop transition-all duration-300 
         bg-white lg:bg-transparent text-black shadow-none  ${activeMenuCss} ${scrollClassLinks}`}
        variants={navVariantsAnimate}
        initial='hidden'
        animate='visible'>
        <ul className='flexCenter flex-col text-xl mt-[6.25rem] md:text-sm lg:gap-2 lg:flex-row lg:mt-0 xl:gap-2 xl:text-base '>
          {links.map((link, index) => (
            <motion.li
              key={index}
              className='my-3 tracking-wide '
              onClick={() => {
                setActiveSection(link.name);
                setIsMenuVisible(false);
                setTimeOfLastClick(Date.now());
              }}
              whileHover={{ scale: 1.05, originX: 0, color: 'var(--blue)' }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                href={link.link}
                className={clsx(
                  'capitalize relative outline-[var(--mainColorOpacity30)] rounded-md px-4 py-2',
                  {
                    'text-[var(--blue)] font-semibold ':
                      activeSection === link.name,
                  }
                )}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Nav;
